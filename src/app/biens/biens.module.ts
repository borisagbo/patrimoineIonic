import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiensPageRoutingModule } from './biens-routing.module';

import { BiensPage } from './biens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiensPageRoutingModule
  ],
  declarations: [BiensPage]
})
export class BiensPageModule {}
