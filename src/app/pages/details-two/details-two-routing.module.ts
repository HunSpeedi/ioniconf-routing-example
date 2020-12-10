import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsTwoPage } from './details-two.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsTwoPageRoutingModule {}
