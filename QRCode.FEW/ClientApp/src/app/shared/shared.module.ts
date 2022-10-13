import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustominputComponent } from './custominput/custominput.component';
import { AddinputComponent } from './addinput/addinput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { TypeqrcodeComponent } from './typeqrcode/typeqrcode.component';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompleinputComponent } from './autocompleinput/autocompleinput.component';
import { UploadinputComponent } from './uploadinput/uploadinput.component';
import { DialogUploadComponent } from './dialog-upload/dialog-upload.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ThongtinkhacComponent } from './thongtinkhac/thongtinkhac.component';

@NgModule({
  declarations: [
    CustominputComponent,
    AddinputComponent,
    QrcodeComponent,
    TypeqrcodeComponent,
    AutocompleinputComponent,
    UploadinputComponent,
    DialogUploadComponent,
    ThongtinkhacComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    NgxQrcodeStylingModule, MatAutocompleteModule,MatDialogModule
  ], exports: [
    CustominputComponent,
    AddinputComponent,
    QrcodeComponent,
    TypeqrcodeComponent,
    AutocompleinputComponent, UploadinputComponent,DialogUploadComponent,ThongtinkhacComponent]
})
export class SharedModule { }
