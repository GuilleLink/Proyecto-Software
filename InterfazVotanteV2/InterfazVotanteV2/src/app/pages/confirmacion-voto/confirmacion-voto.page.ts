import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoService, TaskI, TaskAl, TaskDip } from '../../services/info.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-confirmacion-voto',
  templateUrl: './confirmacion-voto.page.html',
  styleUrls: ['./confirmacion-voto.page.scss'],
})
export class ConfirmacionVotoPage implements OnInit {


  id_presidente: string;
  id_alcalde: string;
  id_lista: string;
  id_distrito: string;
  id_parlacen: string;
  presidente: TaskI;
  Pname: string;
  Ppartido: string;
  PURL: string;
  PidVoto: Int16Array;
  alcalde: TaskAl;
  Alname: string;
  Alpartido: string;
  AlURL: string;
  AlidVoto: Int16Array;
  lista: TaskDip;
  lisname: string;
  lispartido: string;
  lisURL: string;
  lisidVoto: Int16Array;
  distrito: TaskDip;
  disname: string;
  dispartido: string;
  disURL: string;
  disidVoto: Int16Array;
  parlacen: TaskDip;
  parlacenname: string;
  parlacenpartido: string;
  parlacenURL: string;
  parlacenidVoto: Int16Array;
  dispositivo = {
    DValue: '0',
    Dnum: '1'
  }

  constructor(
    private actRoute: ActivatedRoute,
    private infoservice: InfoService,
    public alertController: AlertController,
    private postPvdr: PostProvider,
    public storage: Storage,
    public toastCtrl: ToastController,
    public router: Router
    ) { }
  

  //const promise = new Promise()  
  ngOnInit() {
     //console.log("Llego al inicio a obtener los datos");
    this.actRoute.params.subscribe((data: any) =>{
        this.id_presidente = data.presidente;
        this.id_alcalde = data.alcalde;
        this.id_lista = data.lista;
        this.id_distrito =  data.distrito;
        this.id_parlacen = data.parlacen;
        console.log("Obtuvo data de cantidatos"+data);
    });
    // console.log("llego a la parte de hacer la card");
    // console.log(this.id_presidente);
    this.infoservice.getCandidato(this.id_presidente).subscribe(res =>{
      this.presidente = res;
      this.Pname = this.presidente.presidente;
      this.Ppartido = this.presidente.partido;
      this.PURL = this.presidente.URL;
      this.PidVoto = this.presidente.id_voto;
    });
    this.infoservice.getAlcalde(this.id_alcalde).subscribe(res =>{
      this.alcalde = res;
      this.Alname = this.alcalde.alcalde;
      this.Alpartido = this.alcalde.partido;
      this.AlURL = this.alcalde.URL;
      this.AlidVoto = this.alcalde.id_voto;
    });
    this.infoservice.getLista(this.id_lista).subscribe(res =>{
      this.lista = res;
      this.lispartido = this.lista.partido;
      this.lisURL = this.lista.URL;
      this.lisidVoto = this.lista.id_voto;
    });
    this.infoservice.getDistrito(this.id_distrito).subscribe(res =>{
      this.distrito = res;
      this.dispartido = this.distrito.partido;
      this.disURL = this.distrito.URL;
      this.disidVoto = this.distrito.id_voto;
    });
    this.infoservice.getParlacen(this.id_parlacen).subscribe(res =>{
      this.parlacen = res;
      this.parlacenpartido = this.parlacen.partido;
      this.parlacenURL = this.parlacen.URL;
      this.parlacenidVoto = this.parlacen.id_voto;
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
        console.log(data);
      } else {
        const toast = await this.toastCtrl.create({
          message: alertpesan,
          duration: 2000
        });
        toast.present();
      }
    });
}


  async alertaConfirmar(){
    const alert = await this.alertController.create({
      header: 'Esta apunto de enviar su votos',
      message: '<strong>¿Está seguro de enviarlos?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Esta cancelando');
          }
        }, {
          text: 'Confirmar',
          handler : () => {
            this.enviarDatos();
            this.ActualizarEstadoDispositivo();
          }
        }
      ]
    });
    await alert.present();
  }


  async enviarDatos() {
    let body = {
      id_Voto: "",
      id_centro: ""+2,
      id_presidente_vicepresidente: ""+this.presidente.id_voto,
      id_alcalde: ""+this.alcalde.id_voto,
      id_diputados_parlacen: ""+this.parlacen.id_voto,
      id_diputados_distrito: ""+this.distrito.id_voto,
      id_diputados_lista: ""+this.lista.id_voto,
      aksi: "emitirvoto"
    };
    console.log(body)

    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{ //Llamada del metodo postData en post-provider, recibe como parametros
      //El cuerpo con los datos de la tabla a consultar y el nombre de 
      //proses-api.php donde se realizan los queris.
      if (data.success) {
        this.storage.set("session_storage", data.result);
        this.router.navigate(['inicio']);
        const toast = await this.toastCtrl.create({
        message: "Su voto ha sido emitido exitosamente",
        duration: 2000
        });
        toast.present();
        console.log(data);
      } else {
        const toast = await this.toastCtrl.create({
        message: "NO HEHE",
        duration: 2000
        });
        toast.present();
        }
      });
    
  }

}

