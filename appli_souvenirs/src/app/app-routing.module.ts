import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'fil-souvenir',
    loadChildren: () => import('./fil-souvenir/fil-souvenir.module').then( m => m.FilSouvenirPageModule)
  },
  {
    path: 'rewind',
    loadChildren: () => import('./rewind/rewind.module').then( m => m.RewindPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
