import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ModulosComponent } from './modulos/modulos.component';
import { BasePromedioComponent} from './base-promedio/base-promedio.component';
import { IndemnizacionComponent} from './indemnizacion/indemnizacion.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { PrestacionesComponent } from './prestaciones/prestaciones.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { PendientesComponent } from './pendientes/pendientes.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bienvenida' },
  { path: 'bienvenida',     component: BienvenidaComponent },
  { path: 'base',     component: BasePromedioComponent,data: {animation: '*'}   },
  { path: 'modulos',     component: ModulosComponent,data: {animation: 'isLeft'}   },
  { path: 'indemnizacion',     component: IndemnizacionComponent,data: {animation: '*'}   },
  { path: 'prestaciones',     component: PrestacionesComponent,data: {animation: 'isLeft'}   },
  { path: 'vacaciones',     component: VacacionesComponent,data: {animation: '*'}   },
  { path: 'pendientes',     component: PendientesComponent,data: {animation: 'isLeft'}   },
  { path: 'resultado',     component: ResultadoComponent,data: {animation: '*'}   },
  {path: '**', component: NoencontradoComponent}];
2
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [  BienvenidaComponent ];
}


