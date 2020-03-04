import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3PageModule } from './tab3.module';

const routes: Routes = [
    {
        path: '',
        component: Tab3PageModule
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfilPageRoutingModule { }