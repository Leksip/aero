import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import {ReportsRouting} from './reports.routing';



@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRouting
  ]
})
export class ReportsModule { }
