import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Salaries } from './shared/salaries';

const endpointSalary = 'https://salariesapi.herokuapp.com/salaries.json';
const endpointAdmin = 'https://salariesapi.herokuapp.com/salaries.json';

const header = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})

export class RestService {
  public salaries: Salaries[];
  constructor(private http: HttpClient) {
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  addContrato(contrato) {
    debugger
    const req = this.http.post(endpointSalary + 'tests', JSON.stringify(contrato), { headers: header })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

}
