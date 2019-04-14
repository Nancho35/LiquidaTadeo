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



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bienvenida' },
  { path: 'bienvenida',     component: BienvenidaComponent  },
  { path: 'modulos',     component: ModulosComponent  },
  { path: 'base',     component: BasePromedioComponent  },
  { path: 'vacaciones',     component: VacacionesComponent  },
  { path: 'prestaciones',     component: PrestacionesComponent  },
  { path: 'resultado',     component: ResultadoComponent  },
  { path: 'indemnizacion',     component: IndemnizacionComponent  },
  {path: '**', component: NoencontradoComponent}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [  BienvenidaComponent ];
}


