
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
import { DataService } from '../data.service';
import { Resultado } from '../shared/resultado';
import { RestService } from '../rest.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
  salida_ = new salida();
  constructor(private http: HttpClient,public rest:RestService,private formBuilder: FormBuilder, public router: Router, private data: DataService) {
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
    this.salida_.cargo = this.data.bienvenida.cargo;
    this.salida_.salario = parseFloat(this.data.base.salario.toString());
    this.salida_.total_pendiente = this.data.pendientes.total_pendiente;
    this.salida_.total_prestaciones = this.data.prestaciones.total_prestaciones;
    this.salida_.vacaciones = this.data.vacaciones.vacaciones;
    this.salida_.indemnización_art_64 = this.data.indemnizacion.indemniza_art64;
    this.salida_.indemnización_art_65 = this.data.indemnizacion.indemniza_art65;
  
    this.salida_.total = parseFloat(this.data.pendientes.total_pendiente.toString().replace("", "0")) + parseFloat(this.data.prestaciones.total_prestaciones.toString().replace("", "0")) + parseFloat(this.data.vacaciones.vacaciones.toString().replace("", "0")) + parseFloat(this.data.indemnizacion.indemniza_art64.toString().replace("", "0")) + parseFloat(this.data.indemnizacion.indemniza_art65.toString().replace("", "0"));

    var table = "<table class='table table-hover'><tr><th scope='col'>Descripción</th><th scope='col'>Valor Total</th> </tr>";
    for (var k in this.salida_) {

      if (typeof this.salida_[k] === "number") {
        table += "<tr><td>" + k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, ' ') + "</td><td>" + "$ " + this.salida_[k].toLocaleString('de-DE') + "</td></tr>";
      } else {
        table += "<tr><td>" + k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, ' ') + "</td><td>" + this.salida_[k].toLocaleString('de-DE') + "</td></tr>";
      }
    };

    document.getElementById('showData').innerHTML = table;
  }
  createMyForm() {
    return this.formBuilder.group({
      nombres: ['', Validators.compose([Validators.pattern('^[aA-zZ áéíóúÁÉÍÓÚñÑ]{2,35}$'), Validators.required])],
      correo: ['', Validators.compose([Validators.pattern('^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$'), Validators.required])],
      total:[0]
    });
  }
  onSubmit({ value, valid }: { value: Resultado, valid: boolean }) {
    value.total= this.salida_.total
    this.submitted = true;
    this.submittedModel = value;
    this.data.resultado = this.submittedModel;
    this.email = true
    const merged = Object.assign(this.data.bienvenida, this.data.base,this.data.recargos,this.data.vacaciones, this.data.indemnizacion, this.data.prestaciones, this.data.pendientes,this.data.resultado);
console.log(merged)

    const header = new HttpHeaders({ 'Content-Type': 'application/json' });

    const req = this.http.post('https://liquidaapi.herokuapp.com/liquidacions', JSON.stringify(merged), { headers: header })
      .subscribe( 
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
// Llamada a servicio REST-API

    //this.rest.addLiquida( this.data.resultado);


}
class salida {
  public cargo: string;
  public salario: number;
  public total_pendiente: number;
  public total_prestaciones: number;
  public vacaciones: number;
  public indemnización_art_64: number;
  public indemnización_art_65: number;
  public total: number;



}