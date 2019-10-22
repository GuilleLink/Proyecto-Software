import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CandidatosParlacenPage } from './candidatos-parlacen.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatosParlacenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CandidatosParlacenPage]
})
export class CandidatosParlacenPageModule {}
