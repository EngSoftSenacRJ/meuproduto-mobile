import { ModalController } from '@ionic/angular';
import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.page.html',
  styleUrls: ['./resultado-pesquisa.page.scss'],
})
export class ResultadoPesquisaPage implements OnInit {

  constructor( private modalController: ModalController ) { }
  @Input() public resultadoPesquisa: any;

  ngOnInit() {
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

}
