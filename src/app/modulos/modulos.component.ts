
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
import { DataService } from '../data.service';
import { Modulos } from '../shared/modulos';
import {requireCheckboxesToBeCheckedValidator} from '../require-checkboxes-to-be-checked.validator';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {
  contrato: string[];
  termina: string[];
  baseForm: FormGroup;
  submitted = false;
  model: Modulos;
  submittedModel: Modulos;
  disabled = false;

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

        ck1: new FormControl(false),
        ck2: new FormControl(false),
        ck3: new FormControl(false),
        ck4: new FormControl(false)

    }, requireCheckboxesToBeCheckedValidator());
  }

  onSubmit({ value, valid }: { value: Modulos, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.data.modulos = this.submittedModel;

    if (value.ck1 == true) {
      this.router.navigate(['indemnizacion']);
    } else if (value.ck2 == true) {
      this.router.navigate(['prestaciones']);
    } else if (value.ck3 == true) {
      this.router.navigate(['vacaciones']);
    } else if (value.ck4 == true){
      this.router.navigate(['pendientes']);
    }else{
      this.router.navigate(['resultado']);
    }



  }

}



