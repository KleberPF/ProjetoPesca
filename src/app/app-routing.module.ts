import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
  //{ path: 'descricao', loadChildren: './descricao/descricao.module#DescricaoPageModule' },
  //{ path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  //{ path: 'videos', loadChildren: './videos/videos.module#VideosPageModule' },
  //{ path: 'cartilhas', loadChildren: './cartilhas/cartilhas.module#CartilhasPageModule' },
  //{ path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
