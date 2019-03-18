import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CamelToTitlePipe } from './shared/camel-to-title.pipe';
import {TooltipModule} from 'ng2-tooltip-directive';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ModulosComponent } from './modulos/modulos.component';
import { BasePromedioComponent } from './base-promedio/base-promedio.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule,NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbDateMomentParserFormatter } from './NgbDateMomentParserFormatter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@NgModule({
  imports:      [ AngularFontAwesomeModule,NgbModule,BrowserModule, BsDropdownModule.forRoot(), ModalModule.forRoot(),MatDatepickerModule,MatNativeDateModule,MatCardModule,MatCheckboxModule,BrowserAnimationsModule,BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,TooltipModule,HttpClientModule ],
  declarations: [ AppComponent, AppRoutingModule.components, CamelToTitlePipe, BienvenidaComponent, ModulosComponent, BasePromedioComponent ],
  bootstrap:    [ AppComponent ],
  exports: [MatDatepickerModule, MatNativeDateModule ],
  providers: [
    { 
      provide: NgbDateParserFormatter, 
      useFactory: () => { return new NgbDateMomentParserFormatter("DD-MM-YYYY") } 
    }
  ]
})
export class AppModule { }