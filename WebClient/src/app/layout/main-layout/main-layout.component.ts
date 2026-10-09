import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div style="display:flex; min-height:100vh; background:#f3f4f6;">
      <aside style="width:240px; background:#111827; color:white; padding:24px;">
        <h2 style="margin:0 0 24px;">Massage POS</h2>

        <nav style="display:flex; flex-direction:column; gap:12px;">
          <a routerLink="/dashboard" style="color:white; opacity:0.9;">Dashboard</a>
          <a routerLink="/pos" style="color:white; opacity:0.9;">POS</a>
          <a routerLink="/customers" style="color:white; opacity:0.9;">Customers</a>
          <a routerLink="/products" style="color:white; opacity:0.9;">Products</a>
          <a routerLink="/sales" style="color:white; opacity:0.9;">Sales</a>
          <a routerLink="/settings" style="color:white; opacity:0.9;">Settings</a>
        </nav>
      </aside>

      <main style="flex:1; padding:24px;">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class MainLayoutComponent {}
