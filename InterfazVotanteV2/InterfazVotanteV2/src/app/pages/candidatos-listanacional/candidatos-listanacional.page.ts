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
    });
  }

  ionViewWillEnter(){
    
    this.actRoute.params.subscribe((data: any) =>{
      this.id_presidente = data.presidente;
      this.id_alcalde = data.alcalde;
      console.log(data);
    });
  }



  async enviarDatos() {
    this.router.navigate(["/candidatos-parlacen"]); ///Navegacion hacia alcaldes prueba
  }

}
