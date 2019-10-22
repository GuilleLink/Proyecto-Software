import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'candidatos-presidentes', loadChildren: './pages/candidatos-presidentes/candidatos-presidentes.module#CandidatosPresidentesPageModule' },  { path: 'candidatos-alcaldes', loadChildren: './pages/candidatos-alcaldes/candidatos-alcaldes.module#CandidatosAlcaldesPageModule' },
  { path: 'candidatos-listanacional', loadChildren: './pages/candidatos-listanacional/candidatos-listanacional.module#CandidatosListanacionalPageModule' },
  { path: 'candidatos-distritoelectoral', loadChildren: './pages/candidatos-distritoelectoral/candidatos-distritoelectoral.module#CandidatosDistritoelectoralPageModule' },
  { path: 'candidatos-parlacen', loadChildren: './pages/candidatos-parlacen/candidatos-parlacen.module#CandidatosParlacenPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
