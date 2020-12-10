import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsTwoPageRoutingModule } from './details-two-routing.module';

import { DetailsTwoPage } from './details-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsTwoPageRoutingModule
  ],
  declarations: [DetailsTwoPage]
})
export class DetailsTwoPageModule {}
