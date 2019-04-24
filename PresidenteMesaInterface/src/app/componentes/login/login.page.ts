import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService, 
    public router: Router,
    private navCtrl: NavController,
    //alertControler
    
    ) { }

  pushHome(){
    this.router.navigate(['/home',this.email]);
    //this.router.navigate('/second/${ this.Value }');
  }

  ngOnInit() {
  }

  OnSubmitLogin()
  {
   this.authService.login(this.email, this.password).then( res => {
    this.router.navigate(['/home']);
   }).catch(err => alert('Los datos son incorrectos o no existe el usuario'))
  }

}
