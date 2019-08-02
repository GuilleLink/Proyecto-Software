import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowcustomerTestPage } from './showcustomer-test.page';

const routes: Routes = [
  {
    path: '',
    component: ShowcustomerTestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowcustomerTestPage]
})
export class ShowcustomerTestPageModule {}
