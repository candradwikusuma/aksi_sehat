import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PackagetaskPageRoutingModule } from './packagetask-routing.module';

import { PackagetaskPage } from './packagetask.page';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// import the MultiSelectModule for the MultiSelect component
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
// import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
//import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-buttons';
import { ReactiveFormsModule } from '@angular/forms';
//import { NgMultiSelectDropDownModule } from '../../ng-multiselect-dropdown/src';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackagetaskPageRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    MultiSelectModule,
    CheckBoxModule, ButtonModule, NumericTextBoxModule
  ],
  declarations: [PackagetaskPage]
})
export class PackagetaskPageModule { }
