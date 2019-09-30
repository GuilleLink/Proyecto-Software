import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CandidatosAlcaldesPage } from './candidatos-alcaldes.page';
import { ComponentsModule } from '../../components/components.module';
const routes: Routes = [
  {
    path: '',
    component: CandidatosAlcaldesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [CandidatosAlcaldesPage]
})
export class CandidatosAlcaldesPageModule {}
