import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { PostProvider } from '../../../providers/post-provider';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit {

  status: number;
  public coso: boolean;
  boton: any;
  subscription : Subscription;

  constructor(
    private postPvdr: PostProvider,
    public router: Router
  ) { }

  ngOnInit() {
    //this.Comprobar()
    this.coso = false;
    const source = interval(1000);
    this.subscription = source.subscribe(val => this.Comprobar());
  }

  Comprobar(){
    // this.boton = document.getElementById("inicio");
    // // this.boton.setAttribute("disabled",!this.coso);
    // this.coso = !this.coso;
    // console.log(this.coso);
    // console.log("hola HEHE")
    return new Promise(resolve => {
  		let body = {
  			aksi : 'StatusDispositivo'
  		};
  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			// for(let votante of data.result){
  			// 	this.votantes.push(votante);
        // }
        // console.log('HEHEHEH')
        // console.log(data)
        // console.log(data.result)
        // console.log(data.result[0])
        // console.log(data.result[0].StatusDispositivo)
        this.boton = document.getElementById("inicio");
        this.status = data.result[0].StatusDispositivo;
        if (this.status == 0) {
          this.coso = true;
          //this.boton.setAttribute("disabled", "True"); 
        }
        else{
          this.coso = false;
          //this.boton.setAttribute("disabled", "False");
         // this.router.navigate(['candidatos-presidentes']); 
        }
        //console.log(document.getElementById("boton"))
        
      
  			resolve(true);
  		});
  	});
  }

  ngOnDestroy(){
    this.subscription && this.subscription.unsubscribe();
  }
}
