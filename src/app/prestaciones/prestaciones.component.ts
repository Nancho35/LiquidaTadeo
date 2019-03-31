import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Prestaciones } from '../shared/prestaciones';
import { NgbDate, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-prestaciones',
  templateUrl: './prestaciones.component.html',
  styleUrls: ['./prestaciones.component.css']
})
export class PrestacionesComponent implements OnInit {

  baseForm: FormGroup;
  submitted = false;
  model: Prestaciones;
  submittedModel: Prestaciones;
  markDisabled: (date: NgbDate) => boolean;
  dateString = this.data.bienvenida.fecha_ini
  newDate = new Date(this.dateString);

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
      fecha_ini_presta: ['', Validators.compose([Validators.required])],
      fecha_fin_presta: ['', Validators.compose([Validators.required])],
      cesantias: [0],
      inte_cesantias: [0],
      prima: [0],
      total_prestaciones: [0]
    });
  }


  onSubmit({ value, valid }: { value: Prestaciones, valid: boolean }) {
    //Caculo de prestaciones economicas
    let time = Math.abs(new Date(value.fecha_ini_presta).getTime() - new Date(value.fecha_fin_presta).getTime());
    let diffDays = Math.ceil(time / (1000 * 3600 * 24)); 

    let cesantias = (this.data.base.sueldo_promedio*diffDays)/360
    let inte_cesantias = (cesantias*0.12)/360*diffDays

    value.cesantias = cesantias;
    value.inte_cesantias = inte_cesantias;
    value.prima = cesantias;

    value.total_prestaciones = (cesantias*2)+inte_cesantias

    this.submitted = true;
    this.submittedModel = value;

    this.data.prestaciones = this.submittedModel;

    if (this.data.modulos.ck3 == true) {
      this.router.navigate(['vacaciones']);
    } else {
      this.router.navigate(['resultado']);
    }
  }

}
