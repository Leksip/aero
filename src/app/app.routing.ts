import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './auth/components/home-page/home-page.component';
import {AuthGuard} from './shared/services/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
