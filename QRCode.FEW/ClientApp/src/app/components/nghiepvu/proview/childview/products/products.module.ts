import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CustominputComponent } from './custominput/custominput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddinputComponent } from './addinput/addinput.component';

@NgModule({
  declarations: [
    ProductsComponent,
    AddproductComponent,
    CustominputComponent,
    AddinputComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
