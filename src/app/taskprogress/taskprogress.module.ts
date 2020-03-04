import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskprogressPageRoutingModule } from './taskprogress-routing.module';

import { TaskprogressPage } from './taskprogress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskprogressPageRoutingModule
  ],
  declarations: [TaskprogressPage]
})
export class TaskprogressPageModule {}
