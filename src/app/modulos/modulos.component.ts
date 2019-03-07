
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Modulos } from '../shared/modulos';
@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {
  contrato: string[];
  termina: string[];
  baseForm: FormGroup;
  submitted = false;
  model: Modulos;
  submittedModel: Modulos;

  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();
  }


  ngOnInit() {
    this.contrato = ['Prestación de servicios', 'Termino indefinido'];
    this.termina = ['Con justa causa', 'Sin justa causa'];

  }
  createMyForm() {
    return this.formBuilder.group({
      ck1: [''],
      ck2: [''],
      ck3: [''],
      ck4: ['']

    });
  }
  onSubmit({ value, valid }: { value: Modulos, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.data.modulos = this.submittedModel;
    this.router.navigate(['base']);
    console.log(this.data.modulos)
  }

}



