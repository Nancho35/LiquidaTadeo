
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
import { DataService } from '../data.service';
import { Indemnizacion } from '../shared/indemnizacion';
import { NgbDateStruct, NgbDate, NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
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
  show_art65: boolean = false;
  show_art64: boolean = false;
  show_valor64: boolean = false;
  show_check: boolean = false;
  check: any;
  salida: any[] = [];
  pro1: boolean = false;
  pro2: boolean = false;
  pro3: boolean = false;
  pro4: boolean = false;
  mensaje: boolean = false;
  tipo: string;
  fecha_ini: Date;
  fecha_fin: Date;
  sueldo_promedio: number;
  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService, config: NgbDatepickerConfig) {
    this.baseForm = this.createMyForm();
    this.fecha_fin = new Date(this.data.bienvenida.fecha_fin);
    this.fecha_ini = new Date(this.data.bienvenida.fecha_ini);
    this.tipo = data.bienvenida.contrato;
    this.sueldo_promedio = this.data.base.sueldo_promedio;

    config.maxDate = { year: this.fecha_fin.getFullYear(), month: this.fecha_fin.getMonth() + 1, day: this.fecha_fin.getDate() };
    config.minDate = { year: this.fecha_ini.getFullYear(), month: this.fecha_ini.getMonth() + 1, day: this.fecha_ini.getDate() };
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

    if (this.data.bienvenida.termina == 'Sin justa causa' && (this.tipo == "Término fijo" || this.tipo == "Término indefinido")) {
      this.show_check = true;
    }
    
    if (this.restarfecha(new Date(this.fecha_fin)) > 0) {
      this.show_art64 = true;
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
  CalcularArt65(): void {
    if (this.baseForm.get('check65').value) {
      var diffDays = this.restarfecha(new Date(this.fecha_fin));
      if (diffDays > 0) {
        this.baseForm.patchValue({
          indemniza_art65:  Math.round((((this.sueldo_promedio - this.data.base.auxilio) / 30) * (diffDays))),  
          fecha_ini_pactada: this.fecha_ini
        });
      }
      this.show_art65 = true;
    } else {
      this.show_art65 = false;
    }

  }
  CalcularArt64Fijo(): void {
    if (this.tipo == "Término fijo") {
      const fecha_fin_pactada = this.baseForm.get('fecha_fin_pactada');
      const num_prorroga = this.baseForm.get('num_pro');
      if (this.baseForm.get('calc_art64').value) {
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

    } else {
      if (this.baseForm.get('calc_art64').value) {
        this.show_valor64 = true
        this.calcularArt64Indefinido();
      } else {
        this.show_valor64 = false;
      }
    }

  }
  calcularArt64Indefinido() {
    let b = moment([this.fecha_ini.getFullYear(), this.fecha_ini.getMonth(), this.fecha_ini.getDate()]);
    let a = moment([this.fecha_fin.getFullYear(), this.fecha_fin.getMonth(), this.fecha_fin.getDate()]);

    let max = Math.abs(a.diff(b, 'years'));
    b.add(max, 'years');

    var days = a.diff(b, 'days');
    let suma: number
    let dias_suma: number

    if (this.sueldo_promedio > (828116 * 10)) {
      dias_suma = 20;
      suma = 15;
    }
    else {
      dias_suma = 30;
      suma = 20;
    }
    days = Math.round(suma * days / 360)
    dias_suma += ((max - 1) * suma) + days;

    this.baseForm.patchValue({
      indemniza_art64: (Math.round((this.data.base.sueldo_promedio/30) * dias_suma))
    });
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

  restarfecha(fecha: Date) {
    let dia = new Date().getDate();
    let mes = new Date().getMonth() + 1;
    let anio = new Date().getFullYear();

    return dia - fecha.getDate() + (mes - (fecha.getMonth() + 1)) * 30 + (anio - fecha.getFullYear()) * 360;
  }
  createMyForm() {

    return this.formBuilder.group({
      indemniza_art65: [{ value: '', disabled: true }],
      indemniza_art64: [{ value: '', disabled: true }],
      calc_art64: [''],
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

    if (this.show_check == true && this.tipo == "Término fijo") {


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
      this.baseForm.patchValue({
        indemniza_art64:  Math.round(this.data.recargos.valor_dia * dias)
      });
    }
    this.submitted = true;
    this.submittedModel = value;
    this.data.indemnizacion = this.baseForm.getRawValue();

    if (this.data.modulos.ck2 == true) {
      this.router.navigate(['prestaciones']);
    } else if (this.data.modulos.ck3 == true) {
      this.router.navigate(['vacaciones']);
    } else if (this.data.modulos.ck4 == true) {
      this.router.navigate(['pendientes']);
    } else {
      this.router.navigate(['resultado']);
    }

  }

}
