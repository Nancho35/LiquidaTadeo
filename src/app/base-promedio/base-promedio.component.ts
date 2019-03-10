
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../shared/base';

@Component({
  selector: 'app-base-promedio',
  templateUrl: './base-promedio.component.html',
  styleUrls: ['./base-promedio.component.css']
})

export class BasePromedioComponent implements OnInit {

  contrato: string[];
  termina: string[];
  baseForm: FormGroup;
  submitted = false;
  model: Base;
  submittedModel: Base;


  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();

  }
 

  ngOnInit() {
    this.contrato = ['Prestación de servicios', 'Termino indefinido'];
    this.termina = ['Con justa causa', 'Sin justa causa'];

  }
  createMyForm() {
    return this.formBuilder.group({
      fecha_ini: ['', Validators.compose([Validators.required])],
      fecha_fin: ['', Validators.compose([Validators.required])],
      salario: ['', Validators.compose([Validators.required])],
      auxilio: [''],
      horas_ex_diur: [''],
      horas_ex_domin: [''],
      recargos_noc: [''],
      domi_ordinarios: [''],
      otros: [''],
      concepto_otros: [''],
    });
  }
  onSubmit({ value, valid }: { value: Base, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.data.base = this.submittedModel;
    console.log(this.data.modulos)
    console.log(this.data.bienvenida)
    console.log(this.data.base)
    this.router.navigate(['base']);
  }
  continuar() {
   
  }

}


