import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoPesquisaPageRoutingModule } from './resultado-pesquisa-routing.module';

import { ResultadoPesquisaPage } from './resultado-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoPesquisaPageRoutingModule
  ],
  declarations: [ResultadoPesquisaPage]
})
export class ResultadoPesquisaPageModule {}
