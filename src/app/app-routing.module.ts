import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { SuperAdminGuard } from './super-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminAccessGuard } from './admin-access.guard';
import { PreferencesCheckGuard } from './preferences-check.guard';
import { UnsavedGuard } from './unsaved.guard';
import { AccountInfoGuard } from './account-info.guard';

const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'product/:productId/photos/:photoId',
    component: ProductComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AdminGuard, AuthGuard],
  },
  {
    path: '',
    redirectTo: 'leads',
    pathMatch: 'full',
  },
  {
    path: 'leads',
    component: LeadsGridComponent,
    resolve: {
      data: AccountInfoGuard,
    },
  },

  {
    path: 'admin',
    canActivate: [SuperAdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: '',
        canActivateChild: [AdminAccessGuard],
        children: [
          {
            path: 'manage',
            component: AdminManageComponent,
          },
          {
            path: 'edin',
            component: AdminEditComponent,
          },
          {
            path: 'delete',
            component: AdminDeleteComponent,
          },
        ],
      },
    ],
  },

  {
    path: 'search',
    component: SearchComponent,
    canDeactivate: [UnsavedGuard],
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('./payments/payments.module').then((m) => m.PaymentsModule),
  },
  {
    path: 'preferences',
    canLoad: [PreferencesCheckGuard],
    loadChildren: () =>
      import('./preferences/preferences.module').then(
        (m) => m.PreferencesModule
      ),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
