import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'pesquisa', pathMatch: 'full'  },
  { path: 'pesquisa', loadChildren: () => import('./pages/pesquisa/pesquisa.module').then( m => m.PesquisaPageModule) },
  { path: 'sobre', loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule) },
  { path: 'resultado-pesquisa',  loadChildren: () => import('./pages/modal/resultado-pesquisa/resultado-pesquisa.module').then( m => m.ResultadoPesquisaPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
