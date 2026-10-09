import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent)
      },
      {
        path: 'pos',
        loadComponent: () => import('./pages/pos/pos.component').then((m) => m.PosComponent)
      },
      {
        path: 'customers',
        loadComponent: () => import('./pages/customers/customers.component').then((m) => m.CustomersComponent)
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent)
      },
      {
        path: 'sales',
        loadComponent: () => import('./pages/sales/sales.component').then((m) => m.SalesComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.component').then((m) => m.SettingsComponent)
      }
    ]
  }
];
