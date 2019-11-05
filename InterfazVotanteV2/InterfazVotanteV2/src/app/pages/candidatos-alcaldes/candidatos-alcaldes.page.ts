import { Component, OnInit } from '@angular/core';
import { TaskAl, InfoService } from '../../services/info.service';
import { Router, ActivatedRoute } from "@angular/router";
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
  id_presidente: string;

  constructor(
    private infoservice: InfoService,
    public router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.infoservice.getAlcaldes().subscribe(res => {
      this.alcaldes = res;
      console.log("Cadena alcaldes", this.alcaldes);
    });
  }

  ionViewWillEnter(){
    
    this.actRoute.params.subscribe((data: any) =>{
      this.id_presidente = data.presidente;
      
  		//this.Nombre = data.Nombre;
      //this.Empadronado = data.Empadronado;
      //this.Mesa = data.Mesa;
      //this.Centro = data.Centro;
      console.log(data);
    });
  }

  async enviarDatos() {
    this.router.navigate(["/candidatos-listanacional"]); ///Navegacion hacia alcaldes prueba
  }

}
