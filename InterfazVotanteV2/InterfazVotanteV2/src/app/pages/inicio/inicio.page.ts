import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { PostProvider } from '../../../providers/post-provider';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  status: number;
  boton: any;

  constructor(
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {
    this.comprobar()
  }
  comprobar(){
    console.log("hola HEHE")
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
        this.status = data.result[0].StatusDispositivo
        console.log(this.status)
        if (this.status == 0) {
          console.log("bloquearse")
          this.boton = document.getElementById("boton")
          this.boton.setAttribute("disabled", "True"); 
        }
        else{
          console.log("libre")
        }
        console.log(document.getElementById("boton"))
        

  			resolve(true);
  		});
  	});
  }

}
