import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Prestaciones } from '../shared/prestaciones';
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

  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();
  }

  ngOnInit() {
  }
  createMyForm() {
    return this.formBuilder.group({
      fecha_ini_presta: ['', Validators.compose([Validators.required])],
      fecha_fin_presta: ['', Validators.compose([Validators.required])]


    });
  }
  onSubmit({ value, valid }: { value: Prestaciones, valid: boolean }) {
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
