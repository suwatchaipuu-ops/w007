import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Offers</div>
            <h2 style="margin:6px 0 0;">Package / Course</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + สร้าง Package
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Relax 5 Times</strong>
              <span style="background:#ecfdf5; color:#047857; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Active</span>
            </div>
            <div style="margin-top:12px; color:#6b7280;">Includes massage & foot therapy</div>
            <div style="margin-top:10px; font-size:1.5rem; font-weight:700;">฿ 3,200</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Beauty Renewal</strong>
              <span style="background:#dbeafe; color:#1d4ed8; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Popular</span>
            </div>
            <div style="margin-top:12px; color:#6b7280;">Facial + scrub + body care</div>
            <div style="margin-top:10px; font-size:1.5rem; font-weight:700;">฿ 4,800</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Silver Spa Club</strong>
              <span style="background:#fef3c7; color:#92400e; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Expiring</span>
            </div>
            <div style="margin-top:12px; color:#6b7280;">Member package with priority booking</div>
            <div style="margin-top:10px; font-size:1.5rem; font-weight:700;">฿ 7,500</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PackagesComponent {}
