
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor(public router: Router, private data: DataService) {
   
  }

  ngOnInit() {
    console.log(this.data.bienvenida);
    console.log(this.data.modulos);
    console.log(this.data.base);
    console.log(this.data.vacaciones);
    console.log(this.data.indemnizacion);
    console.log(this.data.prestaciones);

  }


}
