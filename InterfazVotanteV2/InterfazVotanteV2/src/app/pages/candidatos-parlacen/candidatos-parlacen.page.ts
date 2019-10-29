import { Component, OnInit } from '@angular/core';
import { TaskDip, InfoService } from '../../services/info.service';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-candidatos-parlacen',
  templateUrl: './candidatos-parlacen.page.html',
  styleUrls: ['./candidatos-parlacen.page.scss'],
})
export class CandidatosParlacenPage implements OnInit {
  parlacen: TaskDip[];

  constructor(
    private infoservice: InfoService,
    public router: Router
  ) { }

  ngOnInit() {
    this.infoservice.getParlacens().subscribe(res => {
      this.parlacen = res;
      console.log("Cadena Parlacen", this.parlacen);
    });
  }
  async enviarDatos() {
    this.router.navigate(["/candidatos-distritoelectoral"]); ///Navegacion hacia alcaldes prueba
  }

}
