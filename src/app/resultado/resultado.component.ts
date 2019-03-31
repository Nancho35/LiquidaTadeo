
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
    const merged = Object.assign(this.data.bienvenida,this.data.base, this.data.vacaciones,this.data.prestaciones);
    console.log(merged);

    let lstLiquida = new Array();
     //agregamos el objeto rate al array
    
     lstLiquida.push(merged);
 
  var salida = JSON.stringify(lstLiquida);
  document.getElementById('showData').innerHTML = this.json2table(lstLiquida, 'table');
  

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

      bodyRows += '<td>' + row[colName] + '</td>';
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
