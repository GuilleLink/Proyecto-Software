import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  DPI_: string;
  //anggota: any;
  Nombre: string;
  Empadronado: string;
  Mesa: string;
  Centro: string;
  start: number = 0;
  votantes: any = [];
  limit: number = 13; // LIMIT GET PERDATA

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    //public storage: Storage,
  	private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    
    this.actRoute.params.subscribe((data: any) =>{
      this.DPI_ = data.DPI;
      
  		//this.Nombre = data.Nombre;
      //this.Empadronado = data.Empadronado;
      //this.Mesa = data.Mesa;
      //this.Centro = data.Centro;
      console.log(data);
      
    });
    this.votantes = [];
    this.loadVotante();
    /*this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.Nombre = this.anggota.Nombre;
      console.log(res);
    });*/
    //console.log(this.Nombre);
  }
  /*loadData(event:any){
  	this.start += this.limit;
  	setTimeout(() =>{
  	this.loadVotante().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }*/
  loadVotante(){
  	return new Promise(resolve => {
  		let body = {
        DPI_: this.DPI_,
  			aksi : 'dpiV'
  		};
  		this.postPvdr.postData(body, 'proses-api.php').subscribe(datauser => {
        //console.log(datauser)
        //console.log(datauser.result)
        //console.log(datauser.result.Nombre)
  			/*for(let votante of datauser.result){
          console.log(votante)
  				this.votantes.push(votante);
        }*/
        this.Nombre = datauser.result.Nombre
        this.Empadronado = datauser.result.Empadronado
        this.Mesa = datauser.result.Mesa
        this.Centro = datauser.result.Centro
        
  			resolve(true);
  		});
    });
  }
}
