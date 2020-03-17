import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  {
    path: 'recherche-evenement',
    loadChildren: () => import('./recherche-evenement/recherche-evenement.module').then( m => m.RechercheEvenementPageModule)
  },

<<<<<<< HEAD
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
=======
  { path: '', redirectTo: 'souvenirs', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
<<<<<<< HEAD
    path: 'souvenirs',
    loadChildren: () => import('./souvenirs/souvenirs.module').then( m => m.SouvenirsPageModule)
>>>>>>> Juliane2
  },

=======
    path: 'fil-souvenir',
    loadChildren: () => import('./fil-souvenir/fil-souvenir.module').then( m => m.FilSouvenirPageModule)
  },
  {
    path: 'rewind',
    loadChildren: () => import('./rewind/rewind.module').then( m => m.RewindPageModule)
  },
>>>>>>> manu
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> Maxime
