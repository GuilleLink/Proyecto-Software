import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{
  emailUser = null;

  constructor( private ActivatedRoute: ActivatedRoute, private alertController: AlertController, private actionSheet: ActionSheetController) { 
  }

  ngOnInit() {
    //this.argument = this.activatedRoute.snapshot.paramMap.get('id');
    this.emailUser = this.ActivatedRoute.snapshot.paramMap.get('id');
  }

  toggleValue: boolean = false;
  async presentAlert() {
    const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Esta seguro que desea Activar el Voto?',
        buttons: 
        [
        {
          text: "Cancel",
          role: 'cancel',
          handler: () => 
          {
            console.log('Yo')
          }
        },
        {
          text: 'Aceptar',
          cssClass: 'Secondary',
          handler: () => 
          {
            console.log('Second Handler');
          }
        }
      ]
    });
    if(this.toggleValue == true){
      await alert.present();
    }
  }
}
