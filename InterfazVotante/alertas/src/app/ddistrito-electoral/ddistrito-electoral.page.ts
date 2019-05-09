import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActionSheetController} from '@ionic/angular';
import {TaskI} from '../models/task.interface';
import { InfoService } from '../services/info.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-ddistrito-electoral',
  templateUrl: './ddistrito-electoral.page.html',
  styleUrls: ['./ddistrito-electoral.page.scss'],
})
export class DDistritoElectoralPage implements OnInit {
  candidatos: TaskI[];
  constructor(private alertController: AlertController, private actionSheet: ActionSheetController,private infoService: InfoService, private router: Router){

  }
 
  ngOnInit(){
    this.infoService.getCandidatos().subscribe((res)=> {
      console.log('Candidatos',res);
      this.candidatos = res;
    });
  }

  go(){
    this.router.navigate(['alcaldes'])
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
            console.log('Second Handler'), this.go();
          } 
        }
          
      ]
    });

    await alert.present();
}
}
