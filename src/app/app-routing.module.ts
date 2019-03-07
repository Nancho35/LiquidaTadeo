import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ModulosComponent } from './modulos/modulos.component';
import { BasePromedioComponent} from './base-promedio/base-promedio.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bienvenida' },
  { path: 'bienvenida',     component: BienvenidaComponent  },
  { path: 'modulos',     component: ModulosComponent  },
  { path: 'base',     component: BasePromedioComponent  }];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [  BienvenidaComponent ];
}


