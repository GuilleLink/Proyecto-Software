import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { PostProvider } from "../../providers/post-provider";
import { ToastController } from "@ionic/angular";
import { Storage } from "@ionic/Storage";
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  status: number;
  DValue: string;
  Dnum: string;
  elemento: any;
  Nombre: string;
  anggota: any;

  D1Value =  false;
  D2Value = false;
  D3Value = false;
  D4Value = false;
  subscription : Subscription;

  dispositivo = {
    DValue: '0',
    Dnum: '0'
  }

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private actionSheet: ActionSheetController,
    public router: Router,
    private postPvdr: PostProvider,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {}
  emailUser = null;

  ngOnInit() {
    // this.argument = this.activatedRoute.snapshot.paramMap.get('id');
    //this.Comprobar();
    this.emailUser = this.ActivatedRoute.snapshot.paramMap.get('id');
    const source = interval(1000);
    this.subscription = source.subscribe(val => this.Comprobar());
  }
  ionViewWillEnter(){
    
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.Nombre = this.anggota.Nombre;
      console.log(res);
    });
  }

  async ActualizarEstadoDispositivo() {    
    let body = {
      DValue: this.dispositivo.DValue,
      Dnum: this.dispositivo.Dnum,
      aksi: "actualizardispositivo"
    }     
    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{ //Llamada del metodo postData en post-provider, recibe como parametros
                                                                            //El cuerpo con los datos de la tabla a consultar y el nombre de 
                                                                            //proses-api.php donde se realizan los queris.
      var alertpesan = data.msg;
      if (data.success) {
        this.storage.set("session_storage", data.result);
        //this.router.navigate(["/home"]); ///Navegacion hacia home una vez verificados los datos
        const toast = await this.toastCtrl.create({
          message: "Estado de dispositivo actualizado",
          duration: 2000
        });
        toast.present();
        ////console.log("hehe de madruga")
        //////console.log(data.result);
      } else {
        const toast = await this.toastCtrl.create({
          message: alertpesan,
          duration: 2000
        });
        toast.present();
      }
    });
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
            ////console.log('No quiso el #1');//Acá podes editar
            this.D1Value = false;
            this.dispositivo.DValue = '0';
            this.dispositivo.Dnum = '1';
            this.ActualizarEstadoDispositivo()
          }
        },
        {
          text: 'Aceptar',
          cssClass: 'Secondary',
          handler: () => {
            //console.log('Acción si Presionio el dispositivo No1');
            this.dispositivo.DValue = '1';
            this.dispositivo.Dnum = '1';
            this.ActualizarEstadoDispositivo()
          }
        }
      ]
    });

    if (this.D1Value == true) {
      await alertD1.present();
      //console.log("cambio")
    }
    else if (this.D1Value == false) {    
      this.dispositivo.DValue = '0';
      this.dispositivo.Dnum = '1';
      this.ActualizarEstadoDispositivo()
      //console.log("cambio2")
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
            //console.log('No quiso el #2');
            this.D2Value = false;            
          }
        },
        {
          text: 'Aceptar',
          cssClass: 'Secondary',
          handler: () => {
            //console.log('Acción si Presionio el dispositivo No2');
            this.dispositivo.DValue = '1';
            this.dispositivo.Dnum = '2';
            this.ActualizarEstadoDispositivo()
          }
        }
      ]
    });

    if (this.D2Value == true ) {
      await alertD2.present();
    }
    else if (this.D2Value == false) {    
      this.dispositivo.DValue = '0';
      this.dispositivo.Dnum = '2';
      this.ActualizarEstadoDispositivo()
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
            //console.log('No quiso el #3');
            this.D3Value = false;
            this.dispositivo.DValue = '0';
            this.dispositivo.Dnum = '3';
            this.ActualizarEstadoDispositivo()
          }
        },
        {
          text: 'Aceptar',
          cssClass: 'Secondary',
          handler: () => {
            //console.log('Acción si Presionio el dispositivo No3');
            this.dispositivo.DValue = '1';
            this.dispositivo.Dnum = '3';
            this.ActualizarEstadoDispositivo()
          }
        }
      ]
    });

    if (this.D3Value == true) {
      await alertD3.present();
    }
    else if (this.D3Value == false) {    
      this.dispositivo.DValue = '0';
      this.dispositivo.Dnum = '3';
      this.ActualizarEstadoDispositivo()
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
            //console.log('No quiso el #4');
            this.D4Value = false;
            this.dispositivo.DValue = '0';
            this.dispositivo.Dnum = '4';
            this.ActualizarEstadoDispositivo()
          }
        },
        {
          text: 'Aceptar',
          cssClass: 'Secondary',
          handler: () => {
            //console.log('Acción si Presionio el dispositivo No4');
            this.dispositivo.DValue = '1';
            this.dispositivo.Dnum = '4';
            this.ActualizarEstadoDispositivo()
          }
        }
      ]
    });

    if (this.D4Value == true) {
      await alertD4.present();      
    }
    else if (this.D4Value == false) {    
      this.dispositivo.DValue = '0';
      this.dispositivo.Dnum = '4';
      this.ActualizarEstadoDispositivo()
    }
  }
  Comprobar(){
    
    return new Promise(resolve => {
  		let body = {
  			aksi : 'StatusDispositivo'
  		};
  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			
        // this.boton = document.getElementById("inicio");
        this.status = data.result[0].StatusDispositivo;
        if (this.status == 1) {
          //console.log("se debe de encender")
          //this.coso = true;
          //this.dispositivo.DValue = '0';
          //this.dispositivo.Dnum = '1';
          //this.D1Value = true;

          //console.log('desactivado')
          //this.presentAlertD1()
          this.elemento = document.getElementById("toggle1");
          this.elemento.setAttribute("class", "ng-valid ion-color ion-color-primary ios in-item interactive hydrated ng-dirty ng-touched toggle-checked ion-valid ion-dirty ion-touched");
          //console.log(this.elemento)
        }
        else{
          //console.log("se debe de apagar")
          this.elemento = document.getElementById("toggle1");
          this.elemento.setAttribute("class", "ng-valid ion-color ion-color-primary ios in-item interactive hydrated ng-dirty ng-touched ion-valid ion-dirty ion-touched");
          //this.dispositivo.DValue = '1';
          //this.dispositivo.Dnum = '1';
          //this.D1Value = false;
          //this.coso = false;
          //console.log('activado')
        }
  			resolve(true);
  		});
  	});
  }
  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }
  ngOnDestroy(){
    this.subscription && this.subscription.unsubscribe();
  }
}
