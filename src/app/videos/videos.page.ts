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

  async openModal() {
    const modal = await this.modalController.create({
      component: DescricaoPage,
      componentProps: {
        "descricao1": "Esta é a descrição do vídeo 1.",
        "descricao2": "Esta é a descrição do vídeo 2.",
        "descricao3": "Esta é a descrição do vídeo 3."
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
