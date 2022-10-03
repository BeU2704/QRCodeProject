import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {DatePipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DichvuComponent } from './components/nghiepvu/dichvu/dichvu.component';
import { SigninComponent } from './components/share/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    DichvuComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
