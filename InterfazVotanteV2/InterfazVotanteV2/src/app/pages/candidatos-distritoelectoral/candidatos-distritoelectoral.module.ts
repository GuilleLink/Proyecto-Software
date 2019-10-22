import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CandidatosDistritoelectoralPage } from './candidatos-distritoelectoral.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatosDistritoelectoralPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CandidatosDistritoelectoralPage]
})
export class CandidatosDistritoelectoralPageModule {}
