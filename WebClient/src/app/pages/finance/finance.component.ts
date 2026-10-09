import { Component } from '@angular/core';

@Component({
  selector: 'app-finance',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Accounting</div>
            <h2 style="margin:6px 0 0;">การเงิน</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + เปิดกะ
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap:16px; margin-bottom:20px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Sales Today</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">฿ 15,420</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Cash in Drawer</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">฿ 36,800</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Refunds</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">฿ 900</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Net Profit</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">฿ 12,240</div>
          </div>
        </div>

        <div style="overflow:hidden; border:1px solid #e5e7eb; border-radius:14px;">
          <table style="width:100%; border-collapse:collapse; background:white;">
            <thead style="background:#f8fafc;">
              <tr>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Time</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Transaction</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Method</th>
                <th style="padding:14px 16px; text-align:left; color:#374151;">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">10:30</td>
                <td style="padding:14px 16px;">POS-1021</td>
                <td style="padding:14px 16px;">PromptPay</td>
                <td style="padding:14px 16px; font-weight:700;">฿ 1,200</td>
              </tr>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">11:45</td>
                <td style="padding:14px 16px;">POS-1024</td>
                <td style="padding:14px 16px;">Cash</td>
                <td style="padding:14px 16px; font-weight:700;">฿ 850</td>
              </tr>
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:14px 16px;">14:10</td>
                <td style="padding:14px 16px;">POS-1030</td>
                <td style="padding:14px 16px;">Card</td>
                <td style="padding:14px 16px; font-weight:700;">฿ 2,666</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `
})
export class FinanceComponent {}
