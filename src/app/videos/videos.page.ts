import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DescricaoPage } from '../descricao/descricao.page';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  dataReturned: any;

  constructor(public modalController: ModalController) { }

  async openModal(indice) {
    const modal = await this.modalController.create({
      component: DescricaoPage,
      componentProps: {
        "descricoes": ["Vivendo ao longo do litoral brasileiro há mais de 500 anos, comunidades de pescadores sofrem com o impacto da pesca industrial e têm o estilo de vida ameaçado. Neste Expedições, Paula Saldanha e Roberto Werneck acompanham de perto a vida e os costumes dos pescadores artesanais que denunciam abusos da pesca industrial, onde grandes barcos entram em enseadas e estuários de rios, arrastando, com redes de malha fina, cardumes dos berçários naturais.",
        "O vídeo conta a história da atividade pesqueira artesanal na Lagoa dos Patos, a maior laguna do Brasil. A história é contada pelo olhar de um pescador local.",
        "Pescadores artesanais falam sobre o seu trabalho, a relação com o meio ambiente e o significado da pesca artesanal para eles.",
        "Os pescadores artesanais de Tamoios, em Cabo Frio, falam da necessidade de um cais para o local e pedem ao poder público que construa um.",
        "A indústria do petróleo, como outras, causa impactos no meio ambiente. Esse vídeo trata dos conflitos existentes entre a atividade pesqueira artesanal e a indústria petrolífera, em especial o navio sísmico, conhecido pelos pescadores como \"chupa-cabra\".",
        "Esse vídeo fala sobre as interferências causadas no meio ambiente pelas indústrias do petróleo, como a diminuição da quantidade de pescado, e como isso influencia a pesca",
        "A crise hídrica enfrentada pelos pescadores artesanais de águas interiores influencia na pesca e na renda desses trabalhadores. Assim, um grupo de pescadores de São João da Barra se uniu para pedir a limpeza dos canais da região.",
        "Os pescadores de São João da Barra consquistam a limpeza de parte do rio Quitingute e buscam pela continuidade da limpeza para o restante do rio.",
        "O vídeo mostra a história do pescador e poeta Tio Jorge, que fala das dificuldades e alegrias da vida de pescador, misturando sua história com a da região onde vive."],
        "indice": indice,
        "categoria": "Videos"
        //"paramID": 123,
        //"paramTitle": "Descrição"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  ngOnInit() {
  }

}
