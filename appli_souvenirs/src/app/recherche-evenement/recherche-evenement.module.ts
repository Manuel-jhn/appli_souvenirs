import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheEvenementPageRoutingModule } from './recherche-evenement-routing.module';

import { RechercheEvenementPage } from './recherche-evenement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheEvenementPageRoutingModule
  ],
  declarations: [RechercheEvenementPage]
})
export class RechercheEvenementPageModule {}
