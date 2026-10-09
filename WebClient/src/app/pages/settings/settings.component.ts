import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Configuration</div>
            <h2 style="margin:6px 0 0;">ตั้งค่า</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + บันทึก
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">สาขา</div>
            <div style="color:#6b7280;">SABAI Massage & Spa</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">Services</div>
            <div style="color:#6b7280;">นวดไทย • อโรมา • สปา</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">Payment Methods</div>
            <div style="color:#6b7280;">เงินสด • QR • บัตร</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">Commission Rules</div>
            <div style="color:#6b7280;">10% จากยอดขาย</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">Receipt</div>
            <div style="color:#6b7280;">VAT 7% • ใบเสร็จ</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">System</div>
            <div style="color:#6b7280;">Timezone • Notification • Backup</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SettingsComponent {}
