import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiensPage } from './biens.page';

const routes: Routes = [
  {
    path: '',
    component: BiensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiensPageRoutingModule {}
