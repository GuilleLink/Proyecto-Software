import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';
import { CardNullComponent } from './card-null/card-null.component';

@NgModule({
  declarations: [HeaderComponent, CardComponent, CardNullComponent],
  exports: [HeaderComponent, CardComponent, CardNullComponent],
  imports: [CommonModule, IonicModule]
})
export class ComponentsModule { }
