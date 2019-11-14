import { Component, OnInit } from "@angular/core";
import { TaskDip, InfoService } from "../../services/info.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/Storage";
import { PostProvider } from "../../../providers/post-provider";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-candidatos-distritoelectoral',
  templateUrl: './candidatos-distritoelectoral.page.html',
  styleUrls: ['./candidatos-distritoelectoral.page.scss'],
})
export class CandidatosDistritoelectoralPage implements OnInit {

  distritos: TaskDip[];
  id_presidente: string;
  id_alcalde: string;
  id_lista: string;
  id_selec: string;

  constructor(
    private infoservice: InfoService,
    public router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.infoservice.getDistritos().subscribe(res => {
      //console.log("Candidatos", res);
      this.distritos = res;
      console.log("Cadena Distritos", this.distritos);
      this.id_selec = '-';
    });
  }

  ionViewWillEnter(){
    
    this.actRoute.params.subscribe((data: any) =>{
      this.id_presidente = data.presidente;
      this.id_alcalde = data.alcalde;
      this.id_lista = data.lista;
      console.log(data);
    });
  }
  PullID(id){
    console.log("El id seleccionado es"+id);
    this.id_selec = id;
  }

  async enviarDatos() {
    var prueba = '-';
    var index = prueba.localeCompare(this.id_selec);
    //console.log(index);
    if(index == -1){
      this.router.navigate(['candidatos-parlacen/' + this.id_presidente + '/' + this.id_alcalde + '/' + this.id_lista+'/'+this.id_selec]); ///Navegacion hacia alcaldes prueba
    }else{
      console.log('no funciona');
    }
  }


}
