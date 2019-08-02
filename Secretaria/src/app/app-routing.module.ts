import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import  { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  /*{ path: '', redirectTo: 'home', pathMatch: 'full' },*/
  { path: '', redirectTo: 'customer-test', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate: [NologinGuard] },
  { path: 'informacion', loadChildren: './Pages/informacion/informacion.module#InformacionPageModule' },
  /* Estas paginas de abajo son para las pruebas con MySql*/
  { path: 'customer-test', loadChildren: './customer-test/customer-test.module#CustomerTestPageModule' },
  { path: 'addcustomer-test', loadChildren: './addcustomer-test/addcustomer-test.module#AddcustomerTestPageModule' },
  { path: 'showcustomer-test', loadChildren: './showcustomer-test/showcustomer-test.module#ShowcustomerTestPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
