import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  //VOTANTES DE LA BASE DE DATOS - COPIA------
  anggota: any;
  Nombre: string;
  
  votantes: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  //------------------------------------------

  //Intento sin lista de votantes-------------
  DPI_: string;
  Nombre_: string;
  Empadronado_: string;
  Mesa_: string;
  Centro_: string;  
  //-----------------------------------------

  constructor( 
    public router: Router,
    private postPvdr: PostProvider,
    public storage: Storage,
    public toastCtrl: ToastController
    ) {}

  ngOnInit() {

  }

    async LoadVotante(){
    if(this.DPI_ != ""){
      let body = {
        DPI_: this.DPI_,
        Nombre_: this.Nombre,
        Empadronado_: this.Empadronado_,
        Mesa_: this.Mesa_,
        Centro_: this.Centro_,
        aksi: 'getdata'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{ //Llamada del metodo postData en post-provider, recibe como parametros
                                                                              //El cuerpo con los datos de la tabla a consultar y el nombre de 
                                                                              //proses-api.php donde se realizan los queris.
        var alertpesan = data.msg;
        if(data.success){

          //for(let votante of data.result){ //Este for deberia servir, sin embargo como la funcion es asincrona, no hay nada aun en votantes cuando el for lo recorre.
          //  this.votantes.push(votante);
          //  console.log(votante);
          //}
          this.storage.set('session_storage', data.result);
          //this.Test(0,this.votantes[0],this.votantes[1],this.votantes[2],this.votantes[3],this.votantes[4]);
          this.router.navigate(['/informacion/'+ this.DPI_ + '/' +  data.result[3] + '/' + this.Empadronado_ + '/' + this.Mesa_+ '/'+this.Centro_  ]);
          const toast = await this.toastCtrl.create({
		    message: 'Votante encontrado.',
		  	duration: 2000
      });
      
		  toast.present();
		  this.Nombre_ = "";
		  this.DPI_ = "";
          console.log(data);
        }else{
          const toast = await this.toastCtrl.create({
		    message: alertpesan,
		    duration: 2000
		  });
    	  toast.present();
        }
        //return data.result
      });

    }else{
      const toast = await this.toastCtrl.create({
		message: 'Votante no encontrado.',  
		duration: 2000
	  });
	  toast.present();
    }
    //return null;
  }

/*###################################################VOTANTES DE LA BASE DE DATOS - COPIA###################################################*/ 
/*------------------------------------------------------------------------------------------------------------------------------------------*/
  
ionViewWillEnter(){
    this.votantes = [];
    this.start = 0;
    this.loadVotante();
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.Nombre = this.anggota.Nombre;
      console.log(res);
    });
  }

  addVotante(){
  	//this.router.navigate(['/addcustomer']);
  }

  /* NO IMPLEMENTADO AUN. Se debe crear otra page (updateVotante) para el proposito.
  */
  updateVotante(DPI,Nombre,Empadronado,Mesa,Centro){
  	//this.router.navigate(['/addcustomer/' + id + '/' + name + '/' + desc]);
  }

  showVotante(DPI,Nombre,Empadronado,Mesa,Centro){
  	this.router.navigate(['/informacion/' + DPI + '/' + Nombre + '/' + Empadronado + '/' + Mesa + '/' + Centro]);
  }

  /* Refresh cada medio segundo del despliegue de votantes en la base de datos.
  */ 
  doRefresh(event){
  	setTimeout(() =>{
  		this.ionViewWillEnter();
  		event.target.complete();
  	}, 500);
  }

  /*PODRIA MODIFICARSE!! VER loadVotante() MAS ABAJO..
  */ 
  loadData(event:any){
  	this.start += this.limit;
  	setTimeout(() =>{
  	this.loadVotante().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }

  /* Funcion para eliminar un votante de la base de datos.
  */ 
  delVotante(dpi){

  	let body = {
  			aksi : 'delete',
  			votante_dpi : dpi
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.ionViewWillEnter();
  		});

  }

  /*ESTE LOADVOTANTE, PODRIA MODIFICARSE PARA QUE JALARA EL DPI INGRESADO Y CARGARA EL VOTANTE CON ESE DPI.
  */ 
  loadVotante(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdata',
  			limit : this.limit,
  			start : this.start,
  		};
  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let votante of data.result){
  				this.votantes.push(votante);
  			}
  			resolve(true);
  		});
  	});
  }

  /* Funcion asincrona para salir del login.
  */ 
  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }

}



