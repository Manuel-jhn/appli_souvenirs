import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheEvenementPage } from './recherche-evenement.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheEvenementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheEvenementPageRoutingModule {}
