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
    var time = Math.abs(new Date(value.fecha_ini_vacas).getTime() - new Date(value.fecha_fin_vacas).getTime());
    var diffDays = Math.ceil(time / (1000 * 3600 * 24)); 

    value.vacaciones = (this.data.base.sueldo_promedio+this.data.base.auxilio)*diffDays/720
    this.submitted = true;
    this.submittedModel = value;
    this.data.vacaciones = this.submittedModel;
    this.router.navigate(['resultado']);
  }

}
