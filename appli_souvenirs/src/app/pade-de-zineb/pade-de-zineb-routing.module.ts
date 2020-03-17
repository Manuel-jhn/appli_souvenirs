import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadeDeZinebPage } from './pade-de-zineb.page';

const routes: Routes = [
  {
    path: '',
    component: PadeDeZinebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadeDeZinebPageRoutingModule {}
