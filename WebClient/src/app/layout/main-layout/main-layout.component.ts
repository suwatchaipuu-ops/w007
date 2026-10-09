import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { navItems } from '../../shared/navigation';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div style="display:flex; min-height:100vh; background:#f3f4f6; color:#111827;">
      <aside style="width:260px; background:linear-gradient(180deg, #111827 0%, #1f2937 100%); color:white; padding:20px 16px;">
        <div style="margin-bottom:24px; padding:12px 10px; border-bottom:1px solid rgba(255,255,255,0.12);">
          <h2 style="margin:0; font-size:1.3rem; letter-spacing:0.04em;">Massage POS</h2>
        </div>

        <nav style="display:flex; flex-direction:column; gap:6px;">
          <a
            *ngFor="let item of navItems"
            [routerLink]="item.path"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: true }"
            style="color:#e5e7eb; text-decoration:none; padding:10px 12px; border-radius:10px; transition:0.2s ease;"
          >
            {{ item.label }}
          </a>
        </nav>
      </aside>

      <main style="flex:1; padding:24px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; background:white; border-radius:16px; padding:18px 20px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
          <div>
            <div style="font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.08em;">Business overview</div>
            <h1 style="margin:6px 0 0; font-size:1.8rem;">Spa & Massage POS</h1>
          </div>
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="background:#f3f4f6; color:#374151; border-radius:10px; padding:8px 12px; font-weight:600;">Today: 09 Oct 2026</div>
            <div style="background:#dbeafe; color:#1d4ed8; border-radius:999px; padding:8px 14px; font-weight:600;">Open</div>
          </div>
        </div>

        <router-outlet></router-outlet>
      </main>
    </div>

    <style>
      .active-link {
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff !important;
        font-weight: 600;
      }
    </style>
  `,
})
export class MainLayoutComponent {
  navItems = navItems;
}
