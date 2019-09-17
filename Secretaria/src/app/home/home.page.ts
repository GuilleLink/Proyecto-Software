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
  dPiValido: boolean;
  
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
      //aca tiene que ir el query y el if
      const x = await this.verificarDPI()
      //poner un wait de un segundo?
      
      if (this.dPiValido) {
        this.router.navigate(['/informacion/'+ this.DPI_]);
      }
      else{
        const toast = await this.toastCtrl.create({
          message: "DPI Invalido",
          duration: 2000
        });
        toast.present()
      }
      
    }
     verificarDPI(){
      return new Promise(resolve => {
        let body = {
          DPI_: this.DPI_,
          aksi : 'dpiValido'
        };
        this.postPvdr.postData(body, 'proses-api.php').subscribe(datauser => {
          console.log(datauser.success)
          this.dPiValido = datauser.success
          resolve(true);
        });
      });
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



