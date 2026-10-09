import { Component } from '@angular/core';

@Component({
  selector: 'app-finance',
  standalone: true,
  template: `
    <section>
      <h1>การเงิน</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>รายการขาย</li>
          <li>รายการรับเงิน</li>
          <li>เปิด/ปิดกะ</li>
          <li>Cash Drawer</li>
          <li>Refund</li>
          <li>Daily Closing</li>
        </ul>
      </div>
    </section>
  `
})
export class FinanceComponent {}
