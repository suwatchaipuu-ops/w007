import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Stock</div>
            <h2 style="margin:6px 0 0;">สินค้า / Inventory</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + รับสินค้า
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap:16px; margin-bottom:20px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Available</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">486</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Low Stock</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">12</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Used Today</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">72</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Stock Value</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">฿ 28k</div>
          </div>
        </div>

        <div style="overflow:hidden; border:1px solid #e5e7eb; border-radius:14px;">
          <table style="width:100%; border-collapse:collapse; background:white;">
            <thead style="background:#f8fafc;">
              <tr>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Item</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Category</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Stock</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">น้ำมันอโรมา Lavender</td>
                <td style="padding:14px 16px;">น้ำมันนวด</td>
                <td style="padding:14px 16px;">18 ลิตร</td>
                <td style="padding:14px 16px;">
                  <span style="background:#ecfdf5; color:#047857; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Good</span>
                </td>
              </tr>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">ลูกประคบสมุนไพร</td>
                <td style="padding:14px 16px;">อุปกรณ์บริการ</td>
                <td style="padding:14px 16px;">7 ชิ้น</td>
                <td style="padding:14px 16px;">
                  <span style="background:#fef3c7; color:#92400e; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Low</span>
                </td>
              </tr>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">ผ้าขนหนูสีขาว</td>
                <td style="padding:14px 16px;">ของใช้สิ้นเปลือง</td>
                <td style="padding:14px 16px;">64 ชิ้น</td>
                <td style="padding:14px 16px;">
                  <span style="background:#dbeafe; color:#1d4ed8; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Normal</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `,
})
export class InventoryComponent {}
