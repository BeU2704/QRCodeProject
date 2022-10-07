import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateRoutingModule } from './generate-routing.module';
import { GenerateComponent } from './generate.component';
import { VanbanComponent } from './vanban/vanban.component';
import { QrcodeComponent } from 'src/app/components/share/qrcode/qrcode.component';
import { SigninComponent } from 'src/app/components/share/signin/signin.component';
import { ContentdgComponent } from 'src/app/components/share/contentdg/contentdg.component';
import { TypeqrcodeComponent } from 'src/app/components/share/typeqrcode/typeqrcode.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';


@NgModule({
  declarations: [
    GenerateComponent,
    VanbanComponent,
    SigninComponent,
    ContentdgComponent,
    QrcodeComponent,
    TypeqrcodeComponent
  ],
  imports: [
    CommonModule,
    GenerateRoutingModule,
    MatDialogModule,
    MatAutocompleteModule,
    FormsModule,
    NgxQrcodeStylingModule
  ]
})
export class GenerateModule { }
