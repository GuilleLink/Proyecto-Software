import { Component, OnInit } from "@angular/core";
import { TaskDip, InfoService } from "../../services/info.service";
import { Router, RouterModule } from "@angular/router";
import { Storage } from "@ionic/Storage";
import { PostProvider } from "../../../providers/post-provider";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-candidatos-distritoelectoral',
  templateUrl: './candidatos-distritoelectoral.page.html',
  styleUrls: ['./candidatos-distritoelectoral.page.scss'],
})
export class CandidatosDistritoelectoralPage implements OnInit {

  distritos: TaskDip[];

  constructor(
    private infoservice: InfoService,
    public router: Router
  ) { }

  ngOnInit() {
    this.infoservice.getListas().subscribe(res => {
      //console.log("Candidatos", res);
      this.distritos = res;
      console.log("Cadena Distritos", this.distritos);
    });
  }
  async enviarDatos() {
    console.log('hehe')
  }


}
