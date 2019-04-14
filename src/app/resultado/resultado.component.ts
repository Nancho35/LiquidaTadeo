
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
    //TODO redonder decimales hacia arriba
    let total = this.data.prestaciones.total_prestaciones + this.data.vacaciones.vacaciones + this.data.indemnizacion.indemniza_art65
    const merged = Object.assign(this.data.bienvenida,this.data.base, this.data.vacaciones,this.data.prestaciones,this.data.indemnizacion,total);
    console.log(merged);

     var table = "<table class='table table-hover'><tr><th scope='col'>Descripción</th><th scope='col'>Valor Total</th> </tr>";
     for(var k in merged ) {
       table +="<tr><td>"+k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g,' ')+"</td><td>"+merged[k].toLocaleString()+"</td></tr>";
       };
 
     document.getElementById('showData').innerHTML = table;
  

  }


}
