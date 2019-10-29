import { Component, OnInit } from '@angular/core';
import { TaskAl, InfoService } from '../../services/info.service';
import { Router, RouterModule } from "@angular/router";
import { Storage } from '@ionic/Storage';
import { PostProvider } from "../../../providers/post-provider";
import { ToastController } from "@ionic/angular";



@Component({
  selector: 'app-candidatos-alcaldes',
  templateUrl: './candidatos-alcaldes.page.html',
  styleUrls: ['./candidatos-alcaldes.page.scss'],
})
export class CandidatosAlcaldesPage implements OnInit {
  alcaldes: TaskAl[];

  constructor(
    private infoservice: InfoService,
    public router: Router
  ) { }

  ngOnInit() {
    this.infoservice.getAlcaldes().subscribe(res => {
      this.alcaldes = res;
      console.log("Cadena alcaldes", this.alcaldes);
    });
  }
  async enviarDatos() {
    this.router.navigate(["/candidatos-listanacional"]); ///Navegacion hacia alcaldes prueba
  }

}
