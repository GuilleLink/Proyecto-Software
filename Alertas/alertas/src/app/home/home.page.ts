import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertController: AlertController, private actionSheet: ActionSheetController){

  }

  async presentAlert(){
      const alert = await this.alertController.create({
        header: 'Su voto está a punto de ser enviado',
        subHeader: 'Sandra Torres',
        message: '¿Está seguro que desea votar por este candidato?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('You clicked cancel');
          }
        },            
          {
            text: 'Continuar',
            cssClass: 'secondary',
            handler: () => {
              console.log('Second Handler');
            } 
          }
            
        ]
      });

      await alert.present();
  }
}
