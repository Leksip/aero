import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {AlertComponent} from './components/alert/alert.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    AlertComponent
  ],
  exports: [
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule

  ]
})
export class SharedModule {
}
