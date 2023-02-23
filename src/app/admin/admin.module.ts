import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRouting} from './admin.routing';
import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LayoutComponent,

  ],
  imports: [

    CommonModule,
    AdminRouting,
    RouterOutlet,
    SharedModule,
    HttpClientModule

  ]
})
export class AdminModule {
}
