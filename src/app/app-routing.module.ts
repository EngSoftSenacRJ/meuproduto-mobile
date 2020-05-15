import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pesquisa',  pathMatch: 'full' },
  { path: 'pesquisa',  loadChildren: () => import('./pesquisa/pesquisa.module').then( m => m.PesquisaPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
