import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dlista-nacional', loadChildren: './dlista-nacional/dlista-nacional.module#DListaNacionalPageModule' },
  { path: 'ddistrito-electoral', loadChildren: './ddistrito-electoral/ddistrito-electoral.module#DDistritoElectoralPageModule' },
  { path: 'parlacen', loadChildren: './parlacen/parlacen.module#ParlacenPageModule' },
  { path: 'presidente', loadChildren: './presidente/presidente.module#PresidentePageModule' },
  { path: 'alcaldes', loadChildren: './alcaldes/alcaldes.module#AlcaldesPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
