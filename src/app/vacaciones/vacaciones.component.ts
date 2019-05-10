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
  fecha_ini: Date;
  fecha_fin: Date;
  tipo: string;
  markDisabled: (date: NgbDate) => boolean;
  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService,config: NgbDatepickerConfig) {
    this.tipo = data.bienvenida.contrato;
    this.baseForm = this.createMyForm();
    this.fecha_fin = new Date(this.data.bienvenida.fecha_fin);
    this.fecha_ini = new Date(this.data.bienvenida.fecha_ini);
    if(this.tipo == "Término indefinido"){
      config.maxDate = { year: this.fecha_fin.getFullYear(), month: this.fecha_fin.getMonth() + 1, day: this.fecha_fin.getDate() };
      config.minDate = { year: this.fecha_ini.getFullYear(), month: this.fecha_ini.getMonth() + 1, day: this.fecha_ini.getDate() };
    }else{
      const currentDate = new Date();
      config.maxDate = {year:currentDate.getFullYear(), month:currentDate.getMonth()+1, day: currentDate.getDate()};
      config.minDate = { year: this.fecha_ini.getFullYear(), month: this.fecha_ini.getMonth() + 1, day: this.fecha_ini.getDate() };
    }
   
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
    var diffDays = this.calcularDias(new Date(value.fecha_ini_vacas),new Date(value.fecha_fin_vacas));

    value.vacaciones = Math.round((this.data.base.sueldo_promedio-this.data.base.auxilio)*diffDays/720);
    this.submitted = true;
    this.submittedModel = value;
    this.data.vacaciones = this.submittedModel;

    if (this.data.modulos.ck4 == true) {
      this.router.navigate(['pendientes']);
    }else {
      this.router.navigate(['resultado']);
    }

   
  }
  calcularDias(fecha_ini:Date,fecha_fin:Date){
    return (fecha_fin.getDate()-fecha_ini.getDate() + (fecha_fin.getMonth()+1-(fecha_ini.getMonth()+1))*30 + (fecha_fin.getFullYear()-fecha_ini.getFullYear())*360) +1;
  

  }
}
