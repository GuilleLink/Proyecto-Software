import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DListaNacionalPage } from './dlista-nacional.page';

const routes: Routes = [
  {
    path: '',
    component: DListaNacionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DListaNacionalPage]
})
export class DListaNacionalPageModule {}
