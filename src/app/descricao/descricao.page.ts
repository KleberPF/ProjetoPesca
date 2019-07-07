import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {

  modalTitle: string;
  modelId: number;
  nota: number;

  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    //console.table(this.navParams);
    //this.modelId = this.navParams.data.paramID;
    //this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    //const onClosedData: string = "Wrapped Up!";
    //await this.modalController.dismiss(onClosedData);
    await this.modalController.dismiss();
  }

}
