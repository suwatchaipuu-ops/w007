import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div style="display:flex; min-height:100vh; background:#f3f4f6;">
      <aside style="width:260px; background:#111827; color:white; padding:20px 16px;">
        <div style="margin-bottom:24px; padding:12px 10px; border-bottom:1px solid rgba(255,255,255,0.12);">
          <h2 style="margin:0; font-size:1.3rem;">Massage POS</h2>
        </div>

        <nav style="display:flex; flex-direction:column; gap:8px;">
          <a routerLink="/dashboard" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">Dashboard</a>
          <a routerLink="/pos" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">POS / ขาย</a>
          <a routerLink="/booking" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">Booking</a>
          <a routerLink="/rooms" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">ห้อง / เตียง</a>
          <a routerLink="/customers" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">ลูกค้า</a>
          <a routerLink="/therapists" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">Therapist</a>
          <a routerLink="/packages" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">Package</a>
          <a routerLink="/promotions" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">Promotion</a>
          <a routerLink="/inventory" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">Inventory</a>
          <a routerLink="/finance" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">การเงิน</a>
          <a routerLink="/reports" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">Reports</a>
          <a routerLink="/analytics" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">Analytics</a>
          <a routerLink="/settings" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">ตั้งค่า</a>
          <a routerLink="/admin" style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px;">Administration</a>
        </nav>
      </aside>

      <main style="flex:1; padding:24px;">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class MainLayoutComponent {}
