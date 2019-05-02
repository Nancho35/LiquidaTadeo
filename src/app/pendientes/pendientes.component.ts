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
      sueldo_pendiente: ['', Validators.compose([Validators.pattern("^([1-9]{1})([0-9]{3,7})$")])],
      aux_pendiente: ['', Validators.compose([Validators.pattern("^([1-9]{1})([0-9]{3,7})$")])],
      reajuste_pendiente: ['', Validators.compose([Validators.pattern("^([1-9]{1})([0-9]{3,7})$")])],
      otros_pendiente:['', Validators.compose([Validators.pattern("^([1-9]{1})([0-9]{3,7})$")])]
    });
  }
  onSubmit({ value, valid }: { value: Pendientes, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.data.pendientes = this.submittedModel;
    this.router.navigate(['resultado']);
  }

}
