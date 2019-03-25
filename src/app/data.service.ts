import { Injectable } from '@angular/core';
import { Bienvenida } from './shared/bienvenida';
import { Modulos } from './shared/modulos';
import { Vacaciones } from './shared/vacaciones';
import { Base } from './shared/base';
import { Indemnizacion } from './shared/indemnizacion';
import { Prestaciones } from './shared/prestaciones';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public bienvenida: Bienvenida;
  public modulos: Modulos;
  public base: Base;
  public vacaciones: Vacaciones;
  public indemnizacion: Indemnizacion;
  public prestaciones: Prestaciones;

  
  constructor() { }
}
