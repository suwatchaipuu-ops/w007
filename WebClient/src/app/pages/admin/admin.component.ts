import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Security</div>
            <h2 style="margin:6px 0 0;">Administration</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + เพิ่มผู้ใช้
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">Users</div>
            <div style="color:#6b7280;">18 active accounts</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">Roles</div>
            <div style="color:#6b7280;">Owner, Manager, Front Desk</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="font-weight:700; margin-bottom:8px;">Audit Log</div>
            <div style="color:#6b7280;">12 events today</div>
          </div>
        </div>

        <div style="margin-top:18px; overflow:hidden; border:1px solid #e5e7eb; border-radius:14px;">
          <table style="width:100%; border-collapse:collapse; background:white;">
            <thead style="background:#f8fafc;">
              <tr>
                <th style="padding:14px 16px; text-align:left; color:#374151;">User</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Role</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Status</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Last Login</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">มะลิ ใจดี</td>
                <td style="padding:14px 16px;">Owner</td>
                <td style="padding:14px 16px;">
                  <span style="background:#ecfdf5; color:#047857; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Online</span>
                </td>
                <td style="padding:14px 16px;">09:42</td>
              </tr>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">พิมพ์ชนก วัฒนา</td>
                <td style="padding:14px 16px;">Front Desk</td>
                <td style="padding:14px 16px;">
                  <span style="background:#dbeafe; color:#1d4ed8; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Active</span>
                </td>
                <td style="padding:14px 16px;">08:55</td>
              </tr>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">สมชาย รักษ์ดี</td>
                <td style="padding:14px 16px;">Accountant</td>
                <td style="padding:14px 16px;">
                  <span style="background:#fef3c7; color:#92400e; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Pending</span>
                </td>
                <td style="padding:14px 16px;">Never</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `,
})
export class AdminComponent {}
