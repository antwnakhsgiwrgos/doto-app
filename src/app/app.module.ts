import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    FilterPipeModule,


],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
