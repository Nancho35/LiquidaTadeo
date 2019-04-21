
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
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
    //TODO redonder decimales hacia arriba
    let total = this.data.prestaciones.total_prestaciones + this.data.vacaciones.vacaciones + this.data.indemnizacion.indemniza_art65
    const merged = Object.assign(this.data.bienvenida,this.data.base, this.data.vacaciones,this.data.prestaciones,this.data.indemnizacion,total);
    console.log(merged);

     var table = "<table class='table table-hover'><tr><th scope='col'>Descripción</th><th scope='col'>Valor Total</th> </tr>";
     for(var k in merged ) {
       table +="<tr><td>"+k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g,' ')+"</td><td>"+merged[k].toLocaleString()+"</td></tr>";
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
