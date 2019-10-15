import { Component, OnInit } from "@angular/core";
import { TaskI, InfoService } from "../../services/info.service";

@Component({
  selector: "app-candidatos-presidentes",
  templateUrl: "./candidatos-presidentes.page.html",
  styleUrls: ["./candidatos-presidentes.page.scss"]
})


export class CandidatosPresidentesPage implements OnInit {
  candidatos: TaskI[];
  id_Voto: Int16Array;
  constructor(private infoservice: InfoService) {}

  ngOnInit() {
    this.infoservice.getCandidatos().subscribe(res => {
      //console.log("Candidatos", res);
      this.candidatos = res;
      console.log("Cadena Candidatos", this.candidatos);
    });
  }

  PullID(id_voto: Int16Array){
    this.id_Voto =  id_voto;
    console.log("ESte el el id del partido: "+this.id_Voto);

  }
 
}
