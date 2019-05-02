
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
import { DataService } from '../data.service';
import { Resultado } from '../shared/resultado';
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
  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService) {
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
    console.log((this.data.indemnizacion.indemniza_art64 ));
    salida_.sueldo_pendiente = (this.data.pendientes.sueldo_pendiente)
    salida_.total_prestaciones = this.data.prestaciones.total_prestaciones;
    salida_.vacaciones = this.data.vacaciones.vacaciones;
    salida_.indemniza_art64 = this.data.indemnizacion.indemniza_art64;
    salida_.indemniza_art65 = this.data.indemnizacion.indemniza_art65;
    salida_.total = parseFloat(this.data.pendientes.sueldo_pendiente.toString()) + parseFloat(this.data.prestaciones.total_prestaciones.toString()) + parseFloat(this.data.vacaciones.vacaciones.toString()) + parseFloat(this.data.indemnizacion.indemniza_art64.toString()) + parseFloat(this.data.indemnizacion.indemniza_art65.toString())

    var table = "<table class='table table-hover'><tr><th scope='col'>Descripción</th><th scope='col'>Valor Total</th> </tr>";
    for (var k in salida_) {
      table += "<tr><td>" + k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, ' ') + "</td><td>" + "$"+salida_[k].toLocaleString() + "</td></tr>";
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
  }


}
class salida {
  public sueldo_pendiente: number;
  public total_prestaciones: number;
  public vacaciones: number;
  public indemniza_art64: number;
  public indemniza_art65: number;
  public total: number;



}