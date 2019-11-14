import { Component, OnInit } from '@angular/core';
import { TaskDip, InfoService } from '../../services/info.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-candidatos-listanacional',
  templateUrl: './candidatos-listanacional.page.html',
  styleUrls: ['./candidatos-listanacional.page.scss'],
})
export class CandidatosListanacionalPage implements OnInit {

  diputados: TaskDip[];
  id_presidente: string;
  id_alcalde: string;
  id_selec: string;

  constructor(
    private infoservice: InfoService,
    public router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.infoservice.getListas().subscribe(res => {
      //console.log("Candidatos", res);
      this.diputados = res;
      console.log("Cadena Diputados", this.diputados);
      this.id_selec = '-';
    });
  }

  ionViewWillEnter(){
    
    this.actRoute.params.subscribe((data: any) =>{
      this.id_presidente = data.presidente;
      this.id_alcalde = data.alcalde;
      console.log(data);
    });
  }

  PullID(id){
    console.log("El id seleccionado es"+id);    
    //this.router.navigate(['candidatos-alcaldes',id]);
    this.id_selec = id;
  }

  async enviarDatos() {
    var prueba = '-';
    var index = prueba.localeCompare(this.id_selec);
    //console.log(index);
    if(index == -1){
      this.router.navigate(['candidatos-distritoelectoral/' + this.id_presidente + '/' + this.id_alcalde + '/' + this.id_selec]);
    }else{
      console.log('no funciona');
    } 
  }

}
