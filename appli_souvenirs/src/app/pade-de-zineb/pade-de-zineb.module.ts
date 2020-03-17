import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadeDeZinebPageRoutingModule } from './pade-de-zineb-routing.module';

import { PadeDeZinebPage } from './pade-de-zineb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadeDeZinebPageRoutingModule
  ],
  declarations: [PadeDeZinebPage]
})
export class PadeDeZinebPageModule {}
