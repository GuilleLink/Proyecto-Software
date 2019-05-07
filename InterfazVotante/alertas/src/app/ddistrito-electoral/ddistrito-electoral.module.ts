import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DDistritoElectoralPage } from './ddistrito-electoral.page';

const routes: Routes = [
  {
    path: '',
    component: DDistritoElectoralPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DDistritoElectoralPage]
})
export class DDistritoElectoralPageModule {}
