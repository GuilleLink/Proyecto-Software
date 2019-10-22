import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CandidatosPresidentesPage } from './candidatos-presidentes.page';
import { ComponentsModule } from '../../components/components.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

const routes: Routes = [
  {
    path: '',
    component: CandidatosPresidentesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule
  ],
  declarations: [AppComponent],
  providers: [AngularFirestore],
  bootstrap: [ AppComponent ]
})
export class CandidatosPresidentesPageModule {}
