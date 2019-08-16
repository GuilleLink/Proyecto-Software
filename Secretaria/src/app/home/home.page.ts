import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  DPI: string;
  Nombre: string;
  Empadronado: string;
  Mesa: string;
  Centro: string;
  votantes: any;

  constructor( 
    public router: Router,
    private postPvdr: PostProvider,
    public storage: Storage,
    public toastCtrl: ToastController
    ) {}

  ngOnInit() {}

  /*async alerta1() {
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
  }*/

  async LoadCustomer(dpi,nombre,empadronado,mesa,centro){
    if(this.DPI != ""){
      let body = {
        DPI: this.DPI,
        Nombre: this.Nombre,
        Empadronado: this.Empadronado,
        Mesa: this.Mesa,
        Centro: this.Centro,
        aksi: 'getdata'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{ //Llamada del metodo postData en post-provider, recibe como parametros
                                                                              //El cuerpo con los datos de la tabla a consultar y el nombre de 
                                                                              //proses-api.php donde se realizan los queris.
        var alertpesan = data.msg;
        if(data.success){
          for(let votante of data.result){
            this.votantes.push(votante);
          }
          this.storage.set('session_storage', data.result);
          this.router.navigate(['/informacion/'+ dpi + '/' + nombre + '/' + empadronado + '/' + mesa + '/' + centro]);                     ///Navegacion hacia home una vez verificados los datos
          const toast = await this.toastCtrl.create({  
		    message: 'Votante encontrado.',
		  	duration: 2000
		  });
		  toast.present();
		  this.Nombre = ""; 
		  this.DPI = "";
          console.log(data);
        }else{
          const toast = await this.toastCtrl.create({
		    message: alertpesan,
		    duration: 2000
		  });
    	  toast.present();
        }
      });

    }else{
      const toast = await this.toastCtrl.create({
		message: 'Nombre or password Invalid.',  
		duration: 2000
	  });
	  toast.present();
    }
  }

}
