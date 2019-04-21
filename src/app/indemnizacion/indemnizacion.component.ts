
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
import { DataService } from '../data.service';
import { Indemnizacion } from '../shared/indemnizacion';
import { NgbDateStruct, NgbDate, NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { NgbDateFRParserFormatter } from "../shared/ngb-date-fr-parser-formatter"


@Component({
  selector: 'app-indemnizacion',
  templateUrl: './indemnizacion.component.html',
  styleUrls: ['./indemnizacion.component.css']
})
export class IndemnizacionComponent implements OnInit {

  baseForm: FormGroup;
  submitted = false;
  model: Indemnizacion;
  submittedModel: Indemnizacion;
  show: boolean = false;
  show_check: boolean = false;
  check: any;
  salida: any[] = [];
  pro1: boolean = false;
  pro2: boolean = false;
  pro3: boolean = false;
  pro4: boolean = false;
  mensaje: boolean = false;
  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService, config: NgbDatepickerConfig) {
    this.baseForm = this.createMyForm();
    const fecha_fin = new Date(this.data.bienvenida.fecha_fin);
    const fecha_ini = new Date(this.data.bienvenida.fecha_ini);

    config.maxDate = { year: fecha_fin.getFullYear(), month: fecha_fin.getMonth() + 1, day: fecha_fin.getDate() };
    config.minDate = { year: fecha_ini.getFullYear(), month: fecha_ini.getMonth() + 1, day: fecha_ini.getDate() };
    config.outsideDays = 'hidden';
    config.dayTemplate
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    var diffDays = this.calcularfecha(new Date(this.data.bienvenida.fecha_fin));
    this.baseForm.patchValue({
      indemniza_art65: ((this.data.base.sueldo_promedio - this.data.base.auxilio) / 30) * (diffDays - 1),
      fecha_ini_pactada: this.data.bienvenida.fecha_ini
    });

    if (this.data.bienvenida.termina == 'Sin justa causa' && this.data.bienvenida.contrato == "Término fijo") {
      this.show_check = true;
    }
  }

  calcularProrrogaFinal() {
    const num_pro = this.baseForm.get('num_pro');
    let fecha_ini: Date
    if (num_pro.value == 4) {

      fecha_ini = this.baseForm.get('fecha_fin_pro3').value;

      let fecha_ini_nueva = fecha_ini.setDate(fecha_ini.getDate() + 1);
      let year = new Date(fecha_ini).getFullYear();
      let month = new Date(fecha_ini).getMonth();
      let day = new Date(fecha_ini).getDate();
      let fecha_fin_nueva = new Date(year + 1, month, day)

      this.baseForm.get('fecha_ini_pro4').setValue(new Date(fecha_ini_nueva));
      this.baseForm.get('fecha_fin_pro4').setValue(new Date(fecha_fin_nueva));


    }
  }


  VerProrroga(): void {
    const fecha_fin_pactada = this.baseForm.get('fecha_fin_pactada');
    const num_prorroga = this.baseForm.get('num_pro');
    if (this.baseForm.get('ver_pro').value) {
      this.show = true;
      fecha_fin_pactada.setValidators([Validators.required]);
      num_prorroga.setValidators([Validators.pattern("^([1-4]{1})?$"), Validators.required]);
      window.scrollTo(0, 100000000);
    } else {
      this.show = false;
      this.pro1 = false;
      this.pro2 = false;
      this.pro3 = false;
      this.pro4 = false;
      this.mensaje = false;
      fecha_fin_pactada.clearValidators();;
      num_prorroga.clearValidators();
    }
    /*fecha_fin_pactada.updateValueAndValidity();;
    num_prorroga.updateValueAndValidity();
*/
  }
  pintarProrrogas() {

    window.scrollTo(0, 100000000);
    this.pro1 = false;
    this.pro2 = false;
    this.pro3 = false;
    this.pro4 = false;
    this.mensaje = false;
    const num_pro = this.baseForm.get('num_pro');
    if (num_pro.value <= 4) {
      switch (num_pro.value) {
        case '1': {
          this.pro1 = true;
          break;
        }
        case '2': {
          this.pro1 = true;
          this.pro2 = true;
          break;
        }
        case '3': {
          this.pro1 = true;
          this.pro2 = true;
          this.pro3 = true;

          break;
        }
        case '4': {
          this.pro1 = true;
          this.pro2 = true;
          this.pro3 = true;
          this.pro4 = true;
          this.mensaje = true;

          break;
        }
        default: {
          console.log("Invalid choice");
          break;
        }
      }
    }
  }

  calcularfecha(fecha: Date) {
    let dia = new Date().getDate();
    let mes = new Date().getMonth() + 1;
    let anio = new Date().getFullYear();

    return dia - fecha.getDate() + (mes - (fecha.getMonth() + 1)) * 30 + (anio - fecha.getFullYear()) * 360;


  }
  createMyForm() {

    return this.formBuilder.group({
      indemniza_art65: [{ value: '', disabled: true }],
      indemniza_art64: [{ value: '', disabled: true }],
      ver_pro: [''],
      check65: [''],
      fecha_ini_pactada: [{ value: '', disabled: true }],
      fecha_fin_pactada: [''],
      num_pro: [0],
      fecha_ini_pro1: [''],
      fecha_ini_pro2: [''],
      fecha_ini_pro3: [''],
      fecha_ini_pro4: [{ value: '', disabled: true }],
      fecha_fin_pro1: [''],
      fecha_fin_pro2: [''],
      fecha_fin_pro3: [''],
      fecha_fin_pro4: [{ value: '', disabled: true }],

    });

  }
  onSubmit({ value, valid }: { value: Indemnizacion, valid: boolean }) {

    if (this.show_check == true) {


      //calcular dias
      let num_pro = this.baseForm.get('num_pro');
      let fecha_fin_calcula: Date

      let fecha_fin_pro1 = this.baseForm.get('fecha_fin_pro1').value;
      let fecha_fin_pro2 = this.baseForm.get('fecha_fin_pro2').value;
      let fecha_fin_pro3 = this.baseForm.get('fecha_fin_pro3').value;
      let fecha_fin_pro4 = this.baseForm.get('fecha_fin_pro4').value;


      switch (num_pro.value) {
        case '1': {
          fecha_fin_calcula = fecha_fin_pro1;
          break;
        }
        case '2': {
          fecha_fin_calcula = fecha_fin_pro2;
          break;
        }
        case '3': {
          fecha_fin_calcula = fecha_fin_pro3;
          break;
        }
        case '4': {
          fecha_fin_calcula = fecha_fin_pro4;
          break;
        }
        default: {
          console.log("Invalid choice");
          break;
        }
      }
      let fecha_fin_pactada = this.baseForm.get('fecha_fin_pactada').value;
      let dias = Math.abs(fecha_fin_calcula.getDate() - fecha_fin_pactada.getDate());
    }
    this.submitted = true;
    this.submittedModel = value;
    this.data.indemnizacion = this.baseForm.getRawValue();

    if (this.data.modulos.ck2 == true) {
      this.router.navigate(['prestaciones']);
    } else if (this.data.modulos.ck3 == true) {
      this.router.navigate(['vacaciones']);
    } else {
      this.router.navigate(['resultado']);
    }

  }

}
