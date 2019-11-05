import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoService, TaskI, TaskAl, TaskDip } from '../../services/info.service';


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

  constructor(private actRoute: ActivatedRoute,
    private infoservice: InfoService) { }
  

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
    this.infoservice.getAlcalde(this.id_alcalde).subscribe(res =>{
      this.alcalde = res;
      this.Alname = this.alcalde.alcalde;
      this.Alpartido = this.alcalde.partido;
      this.AlURL = this.alcalde.URL;
      this.AlidVoto = this.alcalde.id_voto;
    });
  }

}

