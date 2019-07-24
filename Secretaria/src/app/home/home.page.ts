import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController, public authservice: AuthService) {}

  ngOnInit() {}


  Onlogout(){
    this.authservice.logout();
  }

  async alerta1() {
    const alert = await this.alertController.create({
      header: 'Informacion votante',
      //message: 'Esta persona si está empadronada. - holaaa',
      buttons: ['Aceptar'],
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
