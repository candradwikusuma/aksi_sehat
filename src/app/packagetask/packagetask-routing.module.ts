import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackagetaskPage } from './packagetask.page';

const routes: Routes = [
  {
    path: '',
    component: PackagetaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagetaskPageRoutingModule {}
