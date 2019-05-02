import { Injectable } from '@angular/core';
import { Bienvenida } from './shared/bienvenida';
import { Modulos } from './shared/modulos';
import { Vacaciones } from './shared/vacaciones';
import { Base } from './shared/base';
import { Indemnizacion } from './shared/indemnizacion';
import { Prestaciones } from './shared/prestaciones';
import { Resultado } from './shared/resultado';
import { Pendientes } from './shared/pendientes';
import { Recargos } from './shared/recargos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public bienvenida: Bienvenida;
  public modulos: Modulos;
  public base: Base;
  public recargos: Recargos;
  public vacaciones: Vacaciones;
  public indemnizacion: Indemnizacion;
  public prestaciones: Prestaciones;
  public resultado: Resultado;
  public pendientes: Pendientes;

  
  
  constructor() { }
}
