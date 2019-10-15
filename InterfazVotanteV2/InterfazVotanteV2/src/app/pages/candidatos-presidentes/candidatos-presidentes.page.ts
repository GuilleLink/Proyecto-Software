import { Component, OnInit } from '@angular/core';
import { TaskI, InfoService } from '../../services/info.service';

@Component({
  selector: 'app-candidatos-presidentes',
  templateUrl: './candidatos-presidentes.page.html',
  styleUrls: ['./candidatos-presidentes.page.scss'],
})
export class CandidatosPresidentesPage implements OnInit {
  candidatos: TaskI[];
  constructor(
    private infoservice: InfoService
  ) { }

  ngOnInit() {
    this.infoservice.getCandidatos().subscribe(res =>{
      //console.log("Candidatos", res);
      this.candidatos = res;
      console.log("Cadena Candidatos", this.candidatos);
    })
  }

}
