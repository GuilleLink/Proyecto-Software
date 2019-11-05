import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
    this.actRoute.params.subscribe((data: any) =>{
      this.id_presidente = data.presidente;
      this.id_alcalde = data.alcalde;
      this.id_lista = data.lista;
      this.id_distrito =  data.distrito;
      this.id_parlacen = data.parlacen;
      console.log(data);
    });
  }

}

