import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit { 

  Nombre: string;
  password: string; 

  constructor(
    public router: Router,
    private postPvdr: PostProvider,
    public storage: Storage,
    public toastCtrl: ToastController
    ) { }

  ngOnInit() {
  }

  /*OnSubmitLogin(){
    this.authService.login(this.Nombre, this.password).then( res => {
      this.router.navigate(['/home']); 
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'));
  }*/

  async prosesLogin(){
    if(this.Nombre != "" && this.password != ""){
      let body = {
        Nombre: this.Nombre,
        password: this.password,
        aksi: 'login'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{ //Llamada del metodo postData en post-provider, recibe como parametros
                                                                              //El cuerpo con los datos de la tabla a consultar y el nombre de 
                                                                              //proses-api.php donde se realizan los queries.
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session_storage', data.result);
          this.router.navigate(['/home']);                     ///Navegacion hacia home una vez verificados los datos
          const toast = await this.toastCtrl.create({  
		    message: 'Login Succesfully.',
		  	duration: 2000
		  });
		  toast.present();
		  this.Nombre = ""; 
		  this.password = "";
          console.log(data);
        }else{
          const toast = await this.toastCtrl.create({
		    message: alertpesan,
		    duration: 2000
		  });
    	  toast.present();
        }
      });

    }else{
      const toast = await this.toastCtrl.create({
		message: 'Nombre or password Invalid.',  
		duration: 2000
	  });
	  toast.present();
    }
  }

  formRegister(){
  	this.router.navigate(['/home']);
  }

}
