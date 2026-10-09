import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px; margin-bottom:20px;">
        <div style="background:linear-gradient(135deg,#2563eb,#3b82f6); color:white; border-radius:18px; padding:22px; box-shadow:0 10px 24px rgba(37,99,235,0.25);">
          <div style="font-size:0.82rem; opacity:0.85;">ยอดขายวันนี้</div>
          <div style="font-size:2rem; font-weight:700; margin-top:8px;">฿ 15,420</div>
          <div style="margin-top:8px; font-size:0.85rem; opacity:0.85;">+12.5% vs yesterday</div>
        </div>

        <div style="background:linear-gradient(135deg,#10b981,#34d399); color:white; border-radius:18px; padding:22px; box-shadow:0 10px 24px rgba(16,185,129,0.2);">
          <div style="font-size:0.82rem; opacity:0.85;">จำนวนลูกค้า</div>
          <div style="font-size:2rem; font-weight:700; margin-top:8px;">482</div>
          <div style="margin-top:8px; font-size:0.85rem; opacity:0.85;">+38 new customers</div>
        </div>

        <div style="background:linear-gradient(135deg,#f59e0b,#fbbf24); color:#1f2937; border-radius:18px; padding:22px; box-shadow:0 10px 24px rgba(245,158,11,0.2);">
          <div style="font-size:0.82rem; opacity:0.8;">สถานะห้อง</div>
          <div style="font-size:2rem; font-weight:700; margin-top:8px;">12 / 15</div>
          <div style="margin-top:8px; font-size:0.85rem; opacity:0.8;">3 rooms in service</div>
        </div>

        <div style="background:linear-gradient(135deg,#7c3aed,#8b5cf6); color:white; border-radius:18px; padding:22px; box-shadow:0 10px 24px rgba(124,58,237,0.2);">
          <div style="font-size:0.82rem; opacity:0.85;">Therapist วันนี้</div>
          <div style="font-size:2rem; font-weight:700; margin-top:8px;">8</div>
          <div style="margin-top:8px; font-size:0.85rem; opacity:0.85;">2 on break</div>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 1.7fr 1fr; gap:20px;">
        <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
          <h3 style="margin:0 0 16px;">ภาพรวมวันนี้</h3>
          <div style="display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px;">
            <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:16px;">
              <div style="color:#6b7280; font-size:0.82rem;">Orders</div>
              <div style="margin-top:8px; font-size:1.8rem; font-weight:700;">128</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:16px;">
              <div style="color:#6b7280; font-size:0.82rem;">Check-in</div>
              <div style="margin-top:8px; font-size:1.8rem; font-weight:700;">91</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:16px;">
              <div style="color:#6b7280; font-size:0.82rem;">No-show</div>
              <div style="margin-top:8px; font-size:1.8rem; font-weight:700;">5</div>
            </div>
          </div>
        </div>

        <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
          <h3 style="margin:0 0 16px;">Key highlights</h3>
          <ul style="margin:0; padding-left:18px; line-height:1.9; color:#374151;">
            <li>ภาพรวมวันนี้</li>
            <li>ยอดขาย</li>
            <li>จำนวนลูกค้า</li>
            <li>สถานะห้อง</li>
            <li>Therapist วันนี้</li>
            <li>สรุปยอดรายวัน</li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class DashboardComponent {}
