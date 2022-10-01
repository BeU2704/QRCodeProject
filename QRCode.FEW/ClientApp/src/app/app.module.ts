import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QrcodeComponent } from './components/share/qrcode/qrcode.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContentdgComponent } from './components/share/contentdg/contentdg.component';
import { VanbanComponent } from './components/nghiepvu/vanban/vanban.component';
import { VcardComponent } from './components/nghiepvu/vcard/vcard.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeComponent,
    ContentdgComponent,
    VanbanComponent,
    VcardComponent
  ],
  imports: [
    NgxQrcodeStylingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
