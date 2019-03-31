
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Indemnizacion } from '../shared/indemnizacion';

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

  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();
  }

  ngOnInit() {
    var time = Math.abs(new Date().getTime() - new Date(this.data.bienvenida.fecha_fin).getTime());
    var diffDays = Math.ceil(time / (1000 * 3600 * 24)); 
    this.baseForm.patchValue({
      indemniza_art65: ((this.data.base.sueldo_promedio-this.data.base.auxilio)/30)*(diffDays-1)
    });
    
    if (this.data.bienvenida.termina== 'Sin justa causa'){
      this.show = true;
    }

 
  }
  createMyForm() {
   
    return this.formBuilder.group({
      indemniza_art65: [{value:'', disabled: true}],
      indemniza_art64: [{value:'', disabled: true}],
      check64: [''],
      check65: ['']

    });
   
  }
  onSubmit({ value, valid }: { value: Indemnizacion, valid: boolean }) {
    
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
