import { Component, OnInit } from '@angular/core';
import { TaskDip, InfoService } from '../../services/info.service';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-candidatos-listanacional',
  templateUrl: './candidatos-listanacional.page.html',
  styleUrls: ['./candidatos-listanacional.page.scss'],
})
export class CandidatosListanacionalPage implements OnInit {

  diputados: TaskDip[];

  constructor(
    private infoservice: InfoService,
    public router: Router
  ) { }

  ngOnInit() {
    this.infoservice.getListas().subscribe(res => {
      //console.log("Candidatos", res);
      this.diputados = res;
      console.log("Cadena Diputados", this.diputados);
    });
  }
  async enviarDatos() {
    this.router.navigate(["/candidatos-parlacen"]); ///Navegacion hacia alcaldes prueba
  }

}
