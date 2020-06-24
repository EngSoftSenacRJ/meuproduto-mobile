import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoPesquisaPage } from './resultado-pesquisa.page';


const routes: Routes = [
  {
    path: '',
    component: ResultadoPesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoPesquisaPageRoutingModule {}
