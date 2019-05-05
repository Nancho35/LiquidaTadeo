import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
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
  fecha_ini: Date;
  fecha_fin: Date;
  tipo: string;
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
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
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
    var diffDays = this.calcularDias(new Date(value.fecha_ini_presta),new Date(value.fecha_fin_presta));


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
    } else if (this.data.modulos.ck4 == true) {
      this.router.navigate(['pendientes']);
    }else {
      this.router.navigate(['resultado']);
    }
  }
  calcularDias(fecha_ini:Date,fecha_fin:Date){
    return (fecha_fin.getDate()-fecha_ini.getDate() + (fecha_fin.getMonth()+1-(fecha_ini.getMonth()+1))*30 + (fecha_fin.getFullYear()-fecha_ini.getFullYear())*360) +1;
  

  }

}
