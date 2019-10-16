import { Component, OnInit } from "@angular/core";
import { TaskI, InfoService } from "../../services/info.service";
import { Router, RouterModule } from "@angular/router";
import { Storage } from "@ionic/Storage";
import { PostProvider } from "../../../providers/post-provider";

@Component({
  selector: "app-candidatos-presidentes",
  templateUrl: "./candidatos-presidentes.page.html",
  styleUrls: ["./candidatos-presidentes.page.scss"]
})


export class CandidatosPresidentesPage implements OnInit {
  candidatos: TaskI[];
  id_Voto: Int16Array;
  id_centro: string;
  id_presidente_vicepresidente: string;
  id_alcalde: string;
  id_diputados_parlacen: string;
  id_diputados_distrito: string;
  id_diputados_lista: string;

  voto = {
    id_Voto: '',
    id_centro: '',
    id_presidente_vicepresidente: '',
    id_alcalde: '',
    id_diputados_parlacen: '',
    id_diputados_distrito: '',
    id_diputados_lista: ''
  };

  constructor(private infoservice: InfoService) {}

  ngOnInit() {
    this.infoservice.getCandidatos().subscribe(res => {
      //console.log("Candidatos", res);
      this.candidatos = res;
      console.log("Cadena Candidatos", this.candidatos);
    });
  }

  PullID(id_voto: Int16Array){
    this.id_Voto =  id_voto;
    console.log("ESte el id del partido: "+this.id_Voto);

  }
/*
  async enviarDatos() {
    let body = {
      id_Voto: this.
      id_centro: string;
      id_presidente_vicepresidente: string;
      id_alcalde: string;
      id_diputados_parlacen: string;
      id_diputados_distrito: string;
      id_diputados_lista: string;
      aksi: "emitirvoto"
    };

    

    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{ //Llamada del metodo postData en post-provider, recibe como parametros
                                                                            //El cuerpo con los datos de la tabla a consultar y el nombre de 
                                                                            //proses-api.php donde se realizan los queris.
      var alertpesan = data.msg;
      if (data.success) {
        this.storage.set("session_storage", data.result);
        this.router.navigate(["/home"]); ///Navegacion hacia home una vez verificados los datos
        const toast = await this.toastCtrl.create({
          message: "Ha ingresado satisfactoriamente",
          duration: 2000
        });
        toast.present();
        this.usuario.Nombre = "";
        this.usuario.password = "";
        console.log(data);
      } else {
        const toast = await this.toastCtrl.create({
          message: alertpesan,
          duration: 2000
        });
        toast.present();
      }
    });
    
  }*/

}
