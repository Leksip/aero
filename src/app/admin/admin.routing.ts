import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)},
      {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
      {path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)},
      {path: 'billing', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting {
}
