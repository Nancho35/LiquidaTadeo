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
@NgModule({
  imports:      [ MatCardModule,MatCheckboxModule,BrowserAnimationsModule,BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,TooltipModule,HttpClientModule ],
  declarations: [ AppComponent, AppRoutingModule.components, CamelToTitlePipe, BienvenidaComponent, ModulosComponent, BasePromedioComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }