import { Component } from '@angular/core';

@Component({
  selector: 'app-promotions',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Marketing</div>
            <h2 style="margin:6px 0 0;">Promotion / Campaign</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + สร้างแคมเปญ
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">Member 10% Off</div>
            <div style="color:#6b7280;">Valid until 31 Oct</div>
            <div style="margin-top:12px; color:#10b981; font-weight:700;">Active</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">Weekend Spa</div>
            <div style="color:#6b7280;">Buy 2 services get 1 free</div>
            <div style="margin-top:12px; color:#f59e0b; font-weight:700;">Scheduled</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">Birthday Gift</div>
            <div style="color:#6b7280;">Complimentary aroma oil</div>
            <div style="margin-top:12px; color:#3b82f6; font-weight:700;">Running</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PromotionsComponent {}
