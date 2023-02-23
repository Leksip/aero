import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {AdminModule} from './admin/admin.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './shared/auth.interceptor';
import {AuthService} from './shared/services/auth.service';



const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    SharedModule,
    BrowserAnimationsModule,
    AuthModule,
    AdminModule,
    HttpClientModule,
  ],
  providers: [AuthService, INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
