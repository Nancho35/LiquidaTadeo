import { Injectable } from '@angular/core';
import { Bienvenida } from './shared/bienvenida';
import { Modulos } from './shared/modulos';
import { Metabolico } from './shared/metabolico';
import { Somatotipo } from './shared/somatotipo';
import { Base } from './shared/base';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public bienvenida: Bienvenida;
  public modulos: Modulos;
  public metabolico: Metabolico;
  public somatotipo: Somatotipo;
  public base: Base;
  constructor() { }
}
