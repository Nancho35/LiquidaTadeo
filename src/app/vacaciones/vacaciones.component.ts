import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Vacaciones } from '../shared/vacaciones';
import { NgbDate, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})
export class VacacionesComponent implements OnInit {

  baseForm: FormGroup;
  submitted = false;
  model: Vacaciones;
  submittedModel: Vacaciones;
  dateString = this.data.bienvenida.fecha_ini
  newDate = new Date(this.dateString);
  markDisabled: (date: NgbDate) => boolean;
  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService,config: NgbDatepickerConfig) {
    this.baseForm = this.createMyForm();
    const currentDate = new Date();
    config.maxDate = {year:currentDate.getFullYear(), month:currentDate.getMonth()+1, day: currentDate.getDate()};
    config.minDate = {year: this.newDate.getFullYear(), month: this.newDate.getMonth()+1, day: this.newDate.getDate()};
    config.outsideDays = 'hidden';
  }

  ngOnInit() {
  }
  createMyForm() {
    return this.formBuilder.group({
      fecha_ini_vacas: ['', Validators.compose([Validators.required])],
      fecha_fin_vacas: ['', Validators.compose([Validators.required])]


    });
  }

  
  isDisabled() {
    this.markDisabled = (date: NgbDate) => {
      return date.day > new Date().getDate() || date.month > new Date().getMonth()+1 || date.year > new Date().getFullYear();
    };    
  }

  onSubmit({ value, valid }: { value: Vacaciones, valid: boolean }) {
    var diffDays = this.calcularfecha(new Date(this.data.bienvenida.fecha_fin));

    value.vacaciones = (this.data.base.sueldo_promedio+this.data.base.auxilio)*diffDays/720
    this.submitted = true;
    this.submittedModel = value;
    this.data.vacaciones = this.submittedModel;
    this.router.navigate(['resultado']);
  }
  calcularfecha(fecha:Date){
    let dia = new Date().getDate();
    let mes = new Date().getMonth()+1;
    let anio = new Date().getFullYear();

    return dia-fecha.getDate() + (mes-(fecha.getMonth()+1))*30 + (anio-fecha.getFullYear())*360;
  

  }
}
