import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import {InventoryRouting} from './inventory.routing';



@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRouting
  ]
})
export class InventoryModule { }
