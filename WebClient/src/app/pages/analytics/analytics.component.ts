import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Insight</div>
            <h2 style="margin:6px 0 0;">Analytics</h2>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-size:0.8rem; color:#6b7280;">Conversion</div>
            <div style="margin-top:8px; font-size:1.8rem; font-weight:700;">24.8%</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-size:0.8rem; color:#6b7280;">Repeat Rate</div>
            <div style="margin-top:8px; font-size:1.8rem; font-weight:700;">68%</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-size:0.8rem; color:#6b7280;">Avg. Spend</div>
            <div style="margin-top:8px; font-size:1.8rem; font-weight:700;">฿ 1,540</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AnalyticsComponent {}
