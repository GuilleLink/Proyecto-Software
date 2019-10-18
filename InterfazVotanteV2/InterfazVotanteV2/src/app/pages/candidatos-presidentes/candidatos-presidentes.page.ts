import { Component, OnInit } from "@angular/core";
import { TaskI, InfoService } from "../../services/info.service";
import { Router, RouterModule } from "@angular/router";
import { Storage } from "@ionic/Storage";
import { PostProvider } from "../../../providers/post-provider";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-candidatos-presidentes",
  templateUrl: "./candidatos-presidentes.page.html",
  styleUrls: ["./candidatos-presidentes.page.scss"]
})

export class CandidatosPresidentesPage implements OnInit {
  
  candidatos: TaskI[];
  //id_Voto: Int16Array;
  id_centro: string;
  id_presidente_vicepresidente: string;
  id_alcalde: string;
  id_diputados_parlacen: string;
  id_diputados_distrito: string;
  id_diputados_lista: string;

  voto = {
    //id_Voto: '1',
    id_centro: '2',
    id_presidente_vicepresidente: '',
    id_alcalde: '1',
    id_diputados_parlacen: '1',
    id_diputados_distrito: '1',
    id_diputados_lista: '1'
  };

  constructor(
    private infoservice: InfoService,
    public router: Router,
    private postPvdr: PostProvider,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.infoservice.getCandidatos().subscribe(res => {
      //console.log("Candidatos", res);
      this.candidatos = res;
      console.log("Cadena Candidatos", this.candidatos);
    });
  }

  PullID(id_pres_vice: Int16Array){   
    console.log(id_pres_vice);
    //this.id_Voto =  candidato.id_voto;
    //console.log("Este el id del partido: "+this.id_Voto);
    //this.voto.id_Voto = (id_voto)+'';
    this.voto.id_presidente_vicepresidente = (id_pres_vice)+'';
  }

  async enviarDatos() {
    let body = {
      //id_Voto: this.voto.id_Voto,
      id_centro: this.voto.id_centro,
      id_presidente_vicepresidente: this.voto.id_presidente_vicepresidente,
      id_alcalde: this.voto.id_alcalde,
      id_diputados_parlacen: this.voto.id_diputados_parlacen,
      id_diputados_distrito: this.voto.id_diputados_distrito,
      id_diputados_lista: this.voto.id_diputados_lista,
      aksi: "emitirvoto"
    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{ //Llamada del metodo postData en post-provider, recibe como parametros
                                                                            //El cuerpo con los datos de la tabla a consultar y el nombre de 
                                                                            //proses-api.php donde se realizan los queris.
      var alertpesan = data.msg;
      if (data.success) {
        this.storage.set("session_storage", data.result);
        this.router.navigate(["/candidatos-alcaldes"]); ///Navegacion hacia alcaldes prueba
        const toast = await this.toastCtrl.create({
          message: "Su voto ha sido emitido exitosamente",
          duration: 2000
        });
        toast.present();
        //this.usuario.Nombre = "";
        //this.usuario.password = "";
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

}
