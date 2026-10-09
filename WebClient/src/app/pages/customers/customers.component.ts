import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">CRM</div>
            <h2 style="margin:6px 0 0;">ลูกค้า</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + เพิ่มลูกค้า
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap:16px; margin-bottom:18px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Total Customers</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">1,284</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">New This Month</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">92</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">VIP</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">146</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Points Redeemed</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">4,320</div>
          </div>
        </div>

        <div style="overflow:hidden; border:1px solid #e5e7eb; border-radius:14px;">
          <table style="width:100%; border-collapse:collapse; background:white;">
            <thead style="background:#f8fafc;">
              <tr>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Name</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Phone</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Membership</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Last Visit</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">Nina Smith</td>
                <td style="padding:14px 16px;">081-123-4567</td>
                <td style="padding:14px 16px;">Gold</td>
                <td style="padding:14px 16px;">2026-10-09</td>
                <td style="padding:14px 16px;">
                  <span style="background:#ecfdf5; color:#047857; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Active</span>
                </td>
              </tr>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">Aom Chai</td>
                <td style="padding:14px 16px;">082-934-2211</td>
                <td style="padding:14px 16px;">Silver</td>
                <td style="padding:14px 16px;">2026-10-08</td>
                <td style="padding:14px 16px;">
                  <span style="background:#fef3c7; color:#92400e; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Waiting</span>
                </td>
              </tr>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">Boonmee</td>
                <td style="padding:14px 16px;">083-899-7755</td>
                <td style="padding:14px 16px;">VIP</td>
                <td style="padding:14px 16px;">2026-10-06</td>
                <td style="padding:14px 16px;">
                  <span style="background:#dbeafe; color:#1d4ed8; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Booked</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `,
})
export class CustomersComponent {}
