import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Bienvenida } from '../shared/bienvenida';
import { NgbDateStruct, NgbDate, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})

export class BienvenidaComponent implements OnInit {
  // @Output('texto1') enviar = new EventEmitter<string>();
  contrato: string[];
  termina: string[];
  baseForm: FormGroup;
  submitted = false;
  model: Bienvenida;
  submittedModel: Bienvenida;
  markDisabled: (date: NgbDate) => boolean;
  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService,config: NgbDatepickerConfig) {
    this.baseForm = this.createMyForm();
    const currentDate = new Date();
    config.maxDate = {year:currentDate.getFullYear(), month:currentDate.getMonth()+1, day: currentDate.getDate()};
    config.minDate = {year: 1930, month: 1, day: 1};
    config.outsideDays = 'hidden';
    config.dayTemplate
  }

  ngOnInit() {
    this.contrato = ['Término fijo', 'Término indefinido','Contrato de obra o labor'];
    this.termina = ['Con justa causa', 'Sin justa causa','Renuncia'];

  }
  createMyForm() {
    return this.formBuilder.group({
      fecha_ini: ['', Validators.compose([Validators.required])],
      fecha_fin: ['', Validators.compose([Validators.required])],
      cargo: ['', Validators.compose([Validators.pattern('^[aA-zZ áéíóúÁÉÍÓÚñÑ]{2,35}$'), Validators.required])],
      contrato: ['', Validators.compose([Validators.required])],
      termina: ['', Validators.compose([Validators.required])]


    });
  }
  onSubmit({ value, valid }: { value: Bienvenida, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.data.bienvenida = this.submittedModel;
    this.router.navigate(['base']);
  }

}
