
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
      cargo: ['', Validators.compose([Validators.pattern('^[aA-zZ áéíóúÁÉÍÓÚñÑ]{2,35}$'), Validators.required])],
      contrato: ['', Validators.compose([Validators.required])],
      jornada: ['', Validators.compose([Validators.required])],
      tiempo: ['', Validators.compose([Validators.pattern('^[0-9]{2}$'), Validators.required])],
      termina: ['', Validators.compose([Validators.required])]


    });
  }
  onSubmit({ value, valid }: { value: Base, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.data.base = this.submittedModel;
    this.router.navigate(['base']);
  }
  continuar() {
   
  }

}


