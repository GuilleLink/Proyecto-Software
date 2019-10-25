import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private actionSheet: ActionSheetController
  ) {}
  emailUser = null;

  D1Value = false;
  D2Value = false;
  D3Value = false;
  D4Value = false;

  ngOnInit() {
    // this.argument = this.activatedRoute.snapshot.paramMap.get('id');
    this.emailUser = this.ActivatedRoute.snapshot.paramMap.get('id');
  }
  async presentAlertD1() {
    const alertD1 = await this.alertController.create({
      header: 'Alerta',
      message: '¿Seguro que desea Activar el Dispositivo #1?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('No quiso el #1');//Acá podes editar
            this.D1Value = false;
          }
        },
        {
          text: 'Aceptar',
          cssClass: 'Secondary',
          handler: () => {
            console.log('Acción si Presionio el dispositivo No1');
          }
        }
      ]
    });

    if (this.D1Value == true) {
      await alertD1.present();
    }
  }

  async presentAlertD2() {
    const alertD2 = await this.alertController.create({
      header: 'Alerta',
      message: '¿Seguro que desea Activar el Dispositivo #2?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('No quiso el #2');
            this.D2Value = false;
          }
        },
        {
          text: 'Aceptar',
          cssClass: 'Secondary',
          handler: () => {
            console.log('Acción si Presionio el dispositivo No2');
          }
        }
      ]
    });

    if (this.D2Value == true) {
      await alertD2.present();
    }
  }

  async presentAlertD3() {
    const alertD3 = await this.alertController.create({
      header: 'Alerta',
      message: '¿Seguro que desea Activar el Dispositivo #3?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('No quiso el #3');
            this.D3Value = false;
          }
        },
        {
          text: 'Aceptar',
          cssClass: 'Secondary',
          handler: () => {
            console.log('Acción si Presionio el dispositivo No3');
          }
        }
      ]
    });

    if (this.D3Value == true) {
      await alertD3.present();
    }
  }

  async presentAlertD4() {
    const alertD4 = await this.alertController.create({
      header: 'Alerta',
      message: '¿Seguro que desea Activar el Dispositivo #4?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('No quiso el #4');
            this.D4Value = false;
          }
        },
        {
          text: 'Aceptar',
          cssClass: 'Secondary',
          handler: () => {
            console.log('Acción si Presionio el dispositivo No4');
          }
        }
      ]
    });

    if (this.D4Value == true) {
      await alertD4.present();
    }
  }
}
