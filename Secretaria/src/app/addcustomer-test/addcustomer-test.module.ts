import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddcustomerTestPage } from './addcustomer-test.page';

const routes: Routes = [
  {
    path: '',
    component: AddcustomerTestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddcustomerTestPage]
})
export class AddcustomerTestPageModule {}
