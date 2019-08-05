import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DescricaoPage } from '../descricao/descricao.page';

@Component({
  selector: 'app-cartilhas',
  templateUrl: './cartilhas.page.html',
  styleUrls: ['./cartilhas.page.scss'],
})
export class CartilhasPage implements OnInit {

  dataReturned: any;

  constructor(public modalController: ModalController) { }

  async openModal(indice) {
    const modal = await this.modalController.create({
      component: DescricaoPage,
      componentProps: {
        "descricoes": ["Esta cartilha fala sobre os cuidados que devem ser tomados na manipulação de produtos da pesca artesanal, como o pescado pode ser contaminado e como deve ser a higienização dos manipuladores de pescado.",
        "Esta cartilha fala sobre as influências das mudanças climáticas na pesca artesanal, como a desregulação do nível das águas, descontrole dos ventos e aumento no volume das chuvas.", 
        "Esta é a descrição da cartilha 3.",
        "Esta é a descrição da cartilha 4.",
        "Esta é a descrição da cartilha 5."],
        "indice": indice,
        "categoria": "Cartilhas"
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
