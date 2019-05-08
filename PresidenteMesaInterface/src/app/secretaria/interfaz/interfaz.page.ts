import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.page.html',
  styleUrls: ['./interfaz.page.scss'],
})
export class InterfazPage implements OnInit {

  constructor(private alertController: AlertController) { 
  }

  ngOnInit() {
  }

  async alerta1() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Esta persona si está empadronada.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
  async alerta2() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Esta persona no está empadronada.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
