import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ServicoService } from './../services/servico.service';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {

  modalTitle: string;
  colecao: string;
  modalId: number;
  nota: number;
  media: number;
  cartilhas: any;
  videos: any;

  constructor(private modalController: ModalController,
    private navParams: NavParams, private servicoBD: ServicoService) { }

  ngOnInit() {
    this.modalId = this.navParams.data['indice'];
    this.colecao = this.navParams.data['categoria'];
    let id = this.modalId - 1;
    if (this.colecao == "Cartilhas") {
      this.servicoBD.read(this.colecao).subscribe(data => {
        this.cartilhas = data.map(e => {
          return {
            quantidade_avaliacoes: e.payload.doc.data()['quantidade_avaliacoes'],
            soma_avaliacoes: e.payload.doc.data()['soma_avaliacoes'],
          };
        })
        //console.log(this.cartilhas);
        if (this.cartilhas[id].quantidade_avaliacoes == 0)
          this.media = 0;
        else
          this.media = (this.cartilhas[id].soma_avaliacoes / this.cartilhas[id].quantidade_avaliacoes).toFixed(1);
      });
    }
    if (this.colecao == "Videos") {
      this.servicoBD.read(this.colecao).subscribe(data => {
        this.videos = data.map(e => {
          return {
            quantidade_avaliacoes: e.payload.doc.data()['quantidade_avaliacoes'],
            soma_avaliacoes: e.payload.doc.data()['soma_avaliacoes'],
          };
        })
        if (this.videos[id].quantidade_avaliacoes == 0)
          this.media = 0;
        else
          this.media = (this.videos[id].soma_avaliacoes / this.videos[id].quantidade_avaliacoes).toFixed(1);
      });
    }
  }

  atualizaNotaBD(){
    let dados = {};
    let id = this.modalId - 1;
    if (this.colecao == "Cartilhas")
    {
      dados['quantidade_avaliacoes'] = this.cartilhas[id].quantidade_avaliacoes + 1;
      dados['soma_avaliacoes'] = this.cartilhas[id].soma_avaliacoes + this.nota;
    }
    if (this.colecao == "Videos")
    {
      dados['quantidade_avaliacoes'] = this.videos[id].quantidade_avaliacoes + 1;
      dados['soma_avaliacoes'] = this.videos[id].soma_avaliacoes + this.nota;
    }
    this.servicoBD.update(this.modalId, dados, this.colecao);
  }

  async closeModal() {
    //const onClosedData: string = "Wrapped Up!";
    //await this.modalController.dismiss(onClosedData);
    await this.modalController.dismiss();
  }
}
