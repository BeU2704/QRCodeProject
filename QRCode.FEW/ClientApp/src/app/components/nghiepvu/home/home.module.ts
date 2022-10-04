import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VanbanComponent } from './vanban/vanban.component';
import { VcardComponent } from './vcard/vcard.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ContentdgComponent } from '../../share/contentdg/contentdg.component';
import { LoginComponent } from '../../share/login/login.component';
import { TypeqrcodeComponent } from '../../share/typeqrcode/typeqrcode.component';

@NgModule({
  declarations: [
    HomeComponent,
    VanbanComponent,
    VcardComponent,
    QrcodeComponent,    
    ContentdgComponent,
    LoginComponent,
    TypeqrcodeComponent,   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatAutocompleteModule,
    NgxQrcodeStylingModule
  ]
})
export class HomeModule { }
