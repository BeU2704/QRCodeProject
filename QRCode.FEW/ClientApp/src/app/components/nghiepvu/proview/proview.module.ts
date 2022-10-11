import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviewRoutingModule } from './proview-routing.module';
import { ProviewComponent } from './proview.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './commons/sidenav/sidenav.component';
import { AcountinfoComponent } from './commons/acountinfo/acountinfo.component';
import { DashboardComponent } from './childview/dashboard/dashboard.component';
import { CompaniesComponent } from './childview/companies/companies.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ProviewComponent,
    SidenavComponent,
    AcountinfoComponent,
    DashboardComponent,
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    ProviewRoutingModule, MatSidenavModule, MatListModule, MatTableModule
  ]
})
export class ProviewModule { }
