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
  id_selec: string;

  constructor(
    private infoservice: InfoService,
    public router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.infoservice.getAlcaldes().subscribe(res => {
      this.alcaldes = res;
      console.log("Cadena alcaldes", this.alcaldes);
      this.id_selec = '-';
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


  PullID(id){
    console.log("El id seleccionado es"+id); 
    console.log("Habia votado de presidente por "+ this.id_presidente)   
    //this.router.navigate(['candidatos-alcaldes',id]);
    this.id_selec = id;
  }

  async enviarDatos() {
    var prueba = '-';
    var index = prueba.localeCompare(this.id_selec);
    if(index == -1){
      this.router.navigate(['candidatos-listanacional/' + this.id_presidente + '/' + this.id_selec]); 
    }else{
      console.log('no funciona');
    }
  }

}
