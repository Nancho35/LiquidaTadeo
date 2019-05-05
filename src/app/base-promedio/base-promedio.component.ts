
import { Component, OnInit, Output, EventEmitter, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
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
  recargos: Recargos
  constructor(private renderer: Renderer2,private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();
    this.recargos = new Recargos();
  }


  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.contrato = ['Prestación de servicios', 'Termino indefinido'];
    this.termina = ['Con justa causa', 'Sin justa causa'];
    this.renderer.selectRootElement('#salario').focus();
  }
  createMyForm() {
    return this.formBuilder.group({

      salario: [0, Validators.compose([Validators.pattern("^([1-9]{1})([0-9]{5,7})$"), Validators.required])],
      auxilio: [0],
      horas_ex_diur: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$")])],
      horas_ex_noc: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$")])],
      recargos_noc: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$")])],
      domi_ordinarios: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$")])],
      horas_ex_domi_diur: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$")])],
      horas_ex_domi_noc: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$")])],
      otros: [0, Validators.compose([Validators.pattern("^([0-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|180)$")])],
      concepto_otros: [''],
      sueldo_promedio: [0],
      prima_extra: [0, Validators.compose([Validators.pattern("^(0)|([1-9]{1})([0-9]{3,7})$"), Validators.required])],
    });
  }
  onSubmit({ value, valid }: { value: Base, valid: boolean }) {

    value.sueldo_promedio = parseFloat(value.salario.toString()) +parseFloat(this.recargos.hora_extra_diurna.toString()) +parseFloat(this.recargos.hora_extra_nocturna.toString())
    +parseFloat(this.recargos.hora_ordinaria_dominical.toString()) + parseFloat(this.recargos.recargo_nocturno.toString())
    +parseFloat(this.recargos.hora_extra_dominical_diurna.toString())+parseFloat(this.recargos.hora_extra_dominical_nocturna.toString())
    +parseFloat(value.otros.toString());
    this.submitted = true;
    this.submittedModel = value;
    this.data.base = this.submittedModel;
    this.data.recargos = this.recargos;


    this.router.navigate(['modulos']);
  }
  verificaAuxilio() {
    const auxilio = this.baseForm.get('auxilio');
    if (parseFloat(this.baseForm.value.salario) > 100) {
      this.calculaRecargos();
      this.show_imagen = false;
      auxilio.setValidators([]);
      auxilio.updateValueAndValidity();
    };

    if (parseFloat(this.baseForm.value.salario) <= (828116 * 2)) {
      this.show = true;
      auxilio.setValidators([Validators.required, Validators.compose([Validators.pattern("^([1-9]{1})([0-9]{5,6})$")])]);
      auxilio.updateValueAndValidity();

    } else {
      this.show = false;
      auxilio.setValidators([]);
      auxilio.updateValueAndValidity();

    };
  }
  calculaRecargos() {
    
    this.recargos.valor_mes = parseFloat(this.baseForm.value.salario);
    this.recargos.valor_día = this.recargos.valor_mes / 30;
    this.recargos.valor_hora = this.recargos.valor_día / 8;
    this.recargos.hora_extra_diurna = this.recargos.valor_hora * 1.25 * ( this.baseForm.value.horas_ex_diur);
    this.recargos.hora_extra_nocturna = this.recargos.valor_hora * 1.75 * ( this.baseForm.value.horas_ex_noc);
    this.recargos.recargo_nocturno = this.recargos.valor_hora * 0.35  * (this.baseForm.value.recargos_noc);
    this.recargos.hora_ordinaria_dominical = this.recargos.valor_hora * 0.35  * ( this.baseForm.value.domi_ordinarios);
    this.recargos.hora_extra_dominical_diurna = this.recargos.valor_hora * 2 * ( this.baseForm.value.horas_ex_domi_diur);
    this.recargos.hora_extra_dominical_nocturna = this.recargos.valor_hora * 2.5* (this.baseForm.value.horas_ex_domi_noc);


    var table = "<table class='table table-hover'><tr><th scope='col'>Descripción</th><th scope='col'>Valor Total</th> </tr>";
    for(var k in this.recargos ) {
      table +="<tr><td>"+k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g,' ')+"</td><td>$"+this.recargos[k].toLocaleString()+"</td></tr>";
      };

    document.getElementById('showData').innerHTML = table;

  }



 
}


