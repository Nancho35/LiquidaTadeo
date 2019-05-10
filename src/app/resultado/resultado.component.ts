
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
import { DataService } from '../data.service';
import { Resultado } from '../shared/resultado';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})

export class ResultadoComponent implements OnInit {
  baseForm: FormGroup;
  submitted = false;
  model: Resultado;
  submittedModel: Resultado;
  email:boolean = false
  constructor(public rest:RestService,private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    //TODO redonder decimales hacia arriba
    let salida_ = new salida();
    if (typeof this.data.pendientes === 'undefined') {
      this.data.pendientes = {};
    }

    if (typeof this.data.pendientes.total_pendiente === 'undefined') {
      this.data.pendientes.total_pendiente = 0;
    }

    if (typeof this.data.prestaciones === 'undefined') {
      this.data.prestaciones = {};
    }

    if (typeof this.data.prestaciones.total_prestaciones === 'undefined') {
      this.data.prestaciones.total_prestaciones = 0;
    }

    if (typeof this.data.vacaciones === 'undefined') {
      this.data.vacaciones = {};
    }

    if (typeof this.data.vacaciones.vacaciones === 'undefined') {
      this.data.vacaciones.vacaciones = 0;
    }

    if (typeof this.data.indemnizacion === 'undefined') {
      this.data.indemnizacion = {};
    }

    if (typeof this.data.indemnizacion.indemniza_art64 === 'undefined') {
      this.data.indemnizacion.indemniza_art64 = 0;
    }

    if (typeof this.data.indemnizacion.indemniza_art65 === 'undefined') {
      this.data.indemnizacion.indemniza_art65 = 0;
    }
    salida_.cargo = this.data.bienvenida.cargo;
    salida_.salario = parseFloat(this.data.base.salario.toString());
    salida_.total_pendiente = this.data.pendientes.total_pendiente;
    salida_.total_prestaciones = this.data.prestaciones.total_prestaciones;
    salida_.vacaciones = this.data.vacaciones.vacaciones;
    salida_.indemniza_art64 = this.data.indemnizacion.indemniza_art64;
    salida_.indemniza_art65 = this.data.indemnizacion.indemniza_art65;
  
    salida_.total = parseFloat(this.data.pendientes.total_pendiente.toString().replace("", "0")) + parseFloat(this.data.prestaciones.total_prestaciones.toString().replace("", "0")) + parseFloat(this.data.vacaciones.vacaciones.toString().replace("", "0")) + parseFloat(this.data.indemnizacion.indemniza_art64.toString().replace("", "0")) + parseFloat(this.data.indemnizacion.indemniza_art65.toString().replace("", "0"));

    var table = "<table class='table table-hover'><tr><th scope='col'>Descripción</th><th scope='col'>Valor Total</th> </tr>";
    for (var k in salida_) {

      if (typeof salida_[k] === "number") {
        table += "<tr><td>" + k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, ' ') + "</td><td>" + "$" + salida_[k].toLocaleString() + "</td></tr>";
      } else {
        table += "<tr><td>" + k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, ' ') + "</td><td>" + salida_[k].toLocaleString() + "</td></tr>";
      }
    };

    document.getElementById('showData').innerHTML = table;
  }
  createMyForm() {
    return this.formBuilder.group({
      nombres: ['', Validators.compose([Validators.pattern('^[aA-zZ áéíóúÁÉÍÓÚñÑ]{2,35}$'), Validators.required])],
      correo: ['', Validators.compose([Validators.pattern('^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$'), Validators.required])]

    });
  }
  onSubmit({ value, valid }: { value: Resultado, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.data.resultado = this.submittedModel;
    this.email = true
// Llamada a servicio REST-API

    this.rest.addContrato( this.data.resultado);
  }


}
class salida {
  public cargo: string;
  public salario: number;
  public total_pendiente: number;
  public total_prestaciones: number;
  public vacaciones: number;
  public indemniza_art64: number;
  public indemniza_art65: number;
  public total: number;



}