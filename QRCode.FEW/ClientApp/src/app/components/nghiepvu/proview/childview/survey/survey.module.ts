import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';
import { CauhoiComponent } from './cauhoi/cauhoi.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SurveyComponent,
    CauhoiComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    ReactiveFormsModule
  ]
})
export class SurveyModule { }
