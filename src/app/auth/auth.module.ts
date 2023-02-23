import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouting } from './auth.routing';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    AuthDialogComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRouting,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    SharedModule
  ]
})
export class AuthModule { }
