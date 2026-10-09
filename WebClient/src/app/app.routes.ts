import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
      { path: 'pos', loadComponent: () => import('./pages/pos/pos.component').then((m) => m.PosComponent) },
      { path: 'booking', loadComponent: () => import('./pages/booking/booking.component').then((m) => m.BookingComponent) },
      { path: 'rooms', loadComponent: () => import('./pages/rooms/rooms.component').then((m) => m.RoomsComponent) },
      { path: 'customers', loadComponent: () => import('./pages/customers/customers.component').then((m) => m.CustomersComponent) },
      { path: 'therapists', loadComponent: () => import('./pages/therapists/therapists.component').then((m) => m.TherapistsComponent) },
      { path: 'packages', loadComponent: () => import('./pages/packages/packages.component').then((m) => m.PackagesComponent) },
      { path: 'promotions', loadComponent: () => import('./pages/promotions/promotions.component').then((m) => m.PromotionsComponent) },
      { path: 'inventory', loadComponent: () => import('./pages/inventory/inventory.component').then((m) => m.InventoryComponent) },
      { path: 'finance', loadComponent: () => import('./pages/finance/finance.component').then((m) => m.FinanceComponent) },
      { path: 'reports', loadComponent: () => import('./pages/reports/reports.component').then((m) => m.ReportsComponent) },
      { path: 'analytics', loadComponent: () => import('./pages/analytics/analytics.component').then((m) => m.AnalyticsComponent) },
      { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then((m) => m.SettingsComponent) },
      { path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then((m) => m.AdminComponent) },
    ],
  },
];
