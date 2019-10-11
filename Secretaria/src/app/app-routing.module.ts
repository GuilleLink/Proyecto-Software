import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import  { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  /*{ path: '', redirectTo: 'home', pathMatch: 'full' },*/
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'home', loadChildren: './home/home.module#HomePageModule'/*, canActivate: [AuthGuard] */}, 
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule'/*, canActivate: [NologinGuard]*/ },
  { path: 'informacion/:DPI', loadChildren: './Pages/informacion/informacion.module#InformacionPageModule' },  { path: 'help-h', loadChildren: './pages/help-h/help-h.module#HelpHPageModule' },
  { path: 'help-h', loadChildren: './help-h/help-h.module#HelpHPageModule' },
  { path: 'help-l', loadChildren: './help-l/help-l.module#HelpLPageModule' },
  { path: 'help-c', loadChildren: './help-c/help-c.module#HelpCPageModule' },
  { path: 'help-h', loadChildren: './Pages/help-h/help-h.module#HelpHPageModule' },
  { path: 'help-c', loadChildren: './Pages/help-c/help-c.module#HelpCPageModule' },
  { path: 'help-h', loadChildren: './help-h/help-h.module#HelpHPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
