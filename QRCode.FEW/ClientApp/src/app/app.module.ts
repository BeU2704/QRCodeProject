import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QrcodeComponent } from './components/share/qrcode/qrcode.component';
import { QrmobileComponent } from './components/share/qrmobile/qrmobile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContentdgComponent } from './components/share/contentdg/contentdg.component';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeComponent,
    QrmobileComponent,
    ContentdgComponent
  ],
  imports: [
    NgxQrcodeStylingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }