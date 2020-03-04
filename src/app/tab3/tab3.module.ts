import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { HidenavModule } from 'ionic4-hidenav';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HidenavModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page],
  exports: [HidenavModule]
})
export class Tab3PageModule { }
