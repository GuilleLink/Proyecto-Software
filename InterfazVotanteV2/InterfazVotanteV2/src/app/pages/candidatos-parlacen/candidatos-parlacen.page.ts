import { Component, OnInit } from '@angular/core';
import { TaskDip, InfoService } from '../../services/info.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-candidatos-parlacen',
  templateUrl: './candidatos-parlacen.page.html',
  styleUrls: ['./candidatos-parlacen.page.scss'],
})
export class CandidatosParlacenPage implements OnInit {
  parlacen: TaskDip[];
  id_presidente: string;
  id_alcalde: string;
  id_lista: string;
  id_distrito: string;
  id_selec: string;

  constructor(
    private infoservice: InfoService,
    public router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.infoservice.getParlacens().subscribe(res => {
      this.parlacen = res;
      console.log("Cadena Parlacen", this.parlacen);
      this.id_selec = '-';
    });
  }

  ionViewWillEnter(){
    
    this.actRoute.params.subscribe((data: any) =>{
      this.id_presidente = data.presidente;
      this.id_alcalde = data.alcalde;
      this.id_lista = data.lista;
      this.id_distrito =  data.distrito;
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
      this.router.navigate(['confirmacion-voto/' + this.id_presidente + '/' + this.id_alcalde + '/' + this.id_lista+'/'+this.id_distrito+'/'+this.id_selec]); ///Navegacion hacia alcaldes prueba
    }else{
      console.log('no funciona');
    }
  }

}
