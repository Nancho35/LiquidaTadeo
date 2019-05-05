import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
import { DataService } from '../data.service';
import { Pendientes } from '../shared/pendientes';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {
  baseForm: FormGroup;
  submitted = false;
  model: Pendientes;
  submittedModel: Pendientes;

  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();
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
      sueldo_pendiente: [0, Validators.compose([Validators.pattern("^(0)|([1-9]{1})([0-9]{3,7})$")])],
      aux_pendiente: [0, Validators.compose([Validators.pattern("^(0)|([1-9]{1})([0-9]{3,7})$")])],
      reajuste_pendiente: [0, Validators.compose([Validators.pattern("^(0)|([1-9]{1})([0-9]{3,7})$")])],
      otros_pendiente:[0, Validators.compose([Validators.pattern("^(0)|([1-9]{1})([0-9]{3,7})$")])],
      total_pendiente:[0]
    });
  }
  onSubmit({ value, valid }: { value: Pendientes, valid: boolean }) {
    value.total_pendiente =  parseFloat(value.sueldo_pendiente.toString()) + parseFloat(value.aux_pendiente.toString()) + parseFloat(value.reajuste_pendiente.toString())+parseFloat(value.otros_pendiente.toString());
    this.submitted = true;
    this.submittedModel = value;
    this.data.pendientes = this.submittedModel;
    this.router.navigate(['resultado']);
  }

}
