
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../shared/base';
import { Recargos } from '../shared/recargos';

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
  show: boolean = false;
  show_imagen = true;

  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();

  }


  ngOnInit() {
    this.contrato = ['Prestación de servicios', 'Termino indefinido'];
    this.termina = ['Con justa causa', 'Sin justa causa'];
  }
  createMyForm() {
    return this.formBuilder.group({

      salario: [0, Validators.compose([Validators.pattern("^([1-9]{1})([0-9]{5,7})$"), Validators.required])],
      auxilio: [0],
      horas_ex_diur: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$"), Validators.required])],
      horas_ex_domin: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$"), Validators.required])],
      recargos_noc: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$"), Validators.required])],
      domi_ordinarios: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$"), Validators.required])],
      otros: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$"), Validators.required])],
      concepto_otros: [''],
      sueldo_promedio: [0],
      prima_extra: [0, Validators.compose([Validators.pattern("^([0-9]{1})|([0-9]{5,7})$"), Validators.required])],
    });
  }
  onSubmit({ value, valid }: { value: Base, valid: boolean }) {

    value.sueldo_promedio = parseFloat(value.salario.toString()) + parseFloat(value.auxilio.toString()) +
      parseFloat(value.horas_ex_diur.toString()) + parseFloat(value.horas_ex_domin.toString()) +
      parseFloat(value.recargos_noc.toString()) + parseFloat(value.domi_ordinarios.toString()) +
      parseFloat(value.otros.toString());
    this.submitted = true;
    this.submittedModel = value;
    this.data.base = this.submittedModel;
    this.router.navigate(['modulos']);
  }
  verificaAuxilio() {
    const auxilio = this.baseForm.get('auxilio');
    if (parseFloat(this.baseForm.value.salario) > 100) {
      this.calculaRecargos();
      this.show_imagen= false;
      auxilio.setValidators([]);
      auxilio.updateValueAndValidity();
    };

    if (parseFloat(this.baseForm.value.salario) <= (828116 * 2)) { //TODO
      this.show = true;
      auxilio.setValidators([Validators.required,Validators.compose([Validators.pattern("^([1-9]{1})([0-9]{5,6})$")])]);
      auxilio.updateValueAndValidity();

    }else{
      this.show = false;
      auxilio.setValidators([]);
      auxilio.updateValueAndValidity();

    };
  }
  calculaRecargos() {
    var recargos = new FilaRecargos();
    let lstRates = new Array();
    recargos.valor_mes = this.baseForm.value.salario;
    recargos.valor_dia = recargos.valor_mes / 30;
    recargos.valor_hora = recargos.valor_dia / 8;
    recargos.recargo_nocturno = recargos.valor_hora * 0.35;
    recargos.h_extra_diurna = recargos.valor_hora * 1.25;
    recargos.h_extra_nocturna = recargos.valor_hora * 1.75;
    recargos.h_ordinaria_dominical = recargos.h_extra_nocturna;
    recargos.h_estra_dominical_diurna = recargos.valor_hora * 2;
    recargos.h_extra_dominical_nocturna = recargos.valor_hora * 2.5;
    lstRates.push(recargos);
  
    document.getElementById('showData').innerHTML = this.json2table(lstRates, 'table');
  }


  json2table(json, classes) {

    var cols = Object.keys(json[0]);

    var headerRow = '';
    var bodyRows = '';

    classes = classes || '';

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    cols.map(function (col) {
      headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
    });
    json.map(function (row) {
      bodyRows += '<tr>';

      cols.map(function (colName) {
        bodyRows += '<td>' + '$' + row[colName].toLocaleString() + '</td>';
      })

      bodyRows += '</tr>';
    });

    return '<table class="' +
      classes +
      '"><thead><tr>' +
      headerRow +
      '</tr></thead><tbody>' +
      bodyRows +
      '</tbody></table>';
  }
}


class FilaRecargos {
  valor_mes: number;
  valor_dia: number;
  valor_hora: number;
  recargo_nocturno: number;
  h_extra_diurna: number;
  h_extra_nocturna: number;
  h_ordinaria_dominical: number;
  h_estra_dominical_diurna: number;
  h_extra_dominical_nocturna: number;


}


