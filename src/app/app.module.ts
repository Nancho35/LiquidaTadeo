import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CamelToTitlePipe } from './shared/camel-to-title.pipe';
import {TooltipModule} from 'ng2-tooltip-directive';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ModulosComponent } from './modulos/modulos.component';
import { BasePromedioComponent } from './base-promedio/base-promedio.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule,NgbDateParserFormatter,NgbDatepickerI18n, NgbDateStruct, NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IndemnizacionComponent } from './indemnizacion/indemnizacion.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { PrestacionesComponent } from './prestaciones/prestaciones.component';
import { NgbDateCustomParserFormatter } from './NgbDateCustomParserFormatter';
import { FooterComponent } from './footer/footer.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PendientesComponent } from './pendientes/pendientes.component';


const I18N_VALUES = {
  'es': {
    weekdays: ['Lu', 'Ma', 'Mie', 'Ju', 'Vi', 'Sa', 'Do'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  }
  // other languages you would support
};
registerLocaleData(localeEs,   'es');
@NgModule({
  imports:      [ AngularFontAwesomeModule,NgbModule,BrowserModule, BsDropdownModule.forRoot(), ModalModule.forRoot(),MatDatepickerModule,MatNativeDateModule,MatCardModule,MatCheckboxModule,BrowserAnimationsModule,BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,TooltipModule,HttpClientModule ],
  declarations: [ AppComponent, AppRoutingModule.components, CamelToTitlePipe, BienvenidaComponent, ModulosComponent, BasePromedioComponent, IndemnizacionComponent, VacacionesComponent, PrestacionesComponent, ResultadoComponent, FooterComponent, NoencontradoComponent, PendientesComponent ],
  bootstrap:    [ AppComponent ],
  exports: [MatDatepickerModule, MatNativeDateModule ],
  providers: [
    { 
      provide: NgbDateAdapter, useClass: NgbDateNativeAdapter
      
      
    }
  ]
})
export class AppModule { }