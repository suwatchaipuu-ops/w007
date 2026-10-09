import { Component } from '@angular/core';

@Component({
  selector: 'app-pos',
  standalone: true,
  template: `
    <section>
      <h1>POS / ขาย</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>POS transaction screen</p>
        <p style="color:#666;">Features:</p>
        <ul>
          <li>เปิดบิลใหม่</li>
          <li>Walk-in</li>
          <li>รายการบริการ</li>
          <li>เลือก Therapist</li>
          <li>เลือกห้อง</li>
          <li>ส่วนลด / Promotion</li>
          <li>Package</li>
          <li>ชำระเงิน</li>
          <li>พิมพ์ใบเสร็จ</li>
        </ul>
      </div>
    </section>
  `
})
export class PosComponent {}
