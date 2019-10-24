import { Component, OnInit } from '@angular/core';
import { TaskDip, InfoService } from '../../services/info.service';

@Component({
  selector: 'app-candidatos-parlacen',
  templateUrl: './candidatos-parlacen.page.html',
  styleUrls: ['./candidatos-parlacen.page.scss'],
})
export class CandidatosParlacenPage implements OnInit {
  parlacen: TaskDip[];

  constructor(
    private infoservice: InfoService
  ) { }

  ngOnInit() {
    this.infoservice.getAlcaldes().subscribe(res => {
      this.parlacen = res;
      console.log("Cadena Parlacen", this.parlacen);
    });
  }

}
