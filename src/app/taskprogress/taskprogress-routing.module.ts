import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskprogressPage } from './taskprogress.page';

const routes: Routes = [
  {
    path: '',
    component: TaskprogressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskprogressPageRoutingModule {}
