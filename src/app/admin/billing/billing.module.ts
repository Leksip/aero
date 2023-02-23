import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import {BillingRouting} from './billing.routing';



@NgModule({
  declarations: [
    BillingComponent
  ],
  imports: [
    CommonModule,
    BillingRouting
  ]
})
export class BillingModule { }
