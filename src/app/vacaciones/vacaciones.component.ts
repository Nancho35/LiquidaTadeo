import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Vacaciones } from '../shared/vacaciones';

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

  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();
  }

  ngOnInit() {
  }
  createMyForm() {
    return this.formBuilder.group({
      fecha_ini_vacas: ['', Validators.compose([Validators.required])],
      fecha_fin_vacas: ['', Validators.compose([Validators.required])]


    });
  }
  onSubmit({ value, valid }: { value: Vacaciones, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.data.vacaciones = this.submittedModel;
    this.router.navigate(['resultado']);
  }

}
