
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
      
      salario: [0, Validators.compose([Validators.required])],
      auxilio: [0, Validators.compose([Validators.required])],
      horas_ex_diur: [0, Validators.compose([Validators.required])],
      horas_ex_domin: [0, Validators.compose([Validators.required])],
      recargos_noc: [0, Validators.compose([Validators.required])],
      domi_ordinarios: [0, Validators.compose([Validators.required])],
      otros: [0, Validators.compose([Validators.required])],
      concepto_otros: [''],
      sueldo_promedio: [0, Validators.compose([Validators.required])],
    });
  }
  onSubmit({ value, valid }: { value: Base, valid: boolean }) {

    value.sueldo_promedio =  parseFloat(value.salario.toString()) +  parseFloat(value.auxilio.toString())+
     parseFloat(value.horas_ex_diur.toString())+  parseFloat(value.horas_ex_domin.toString())+ 
     parseFloat(value.recargos_noc.toString())+ parseFloat(value.domi_ordinarios.toString())+
     parseFloat(value.otros.toString());
    this.submitted = true;
    this.submittedModel = value;
    this.data.base = this.submittedModel;
    this.router.navigate(['modulos']);
  }
  continuar() {
   
  }

}


