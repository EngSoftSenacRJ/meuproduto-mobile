import { TabsComponent } from './../../components/tabs/tabs.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PesquisaPageRoutingModule } from './pesquisa-routing.module';

import { PesquisaPage } from './pesquisa.page';
import { ResultadoPesquisaPage } from '../modal/resultado-pesquisa/resultado-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisaPageRoutingModule
  ],
  declarations: [TabsComponent , ResultadoPesquisaPage, PesquisaPage],
  entryComponents: [ResultadoPesquisaPage]
})
export class PesquisaPageModule {}
