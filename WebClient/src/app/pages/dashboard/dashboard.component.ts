import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section>
      <h1>Dashboard / ภาพรวม</h1>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin-top:20px;">
        <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <strong>ยอดขายวันนี้</strong>
          <div style="font-size:2rem; margin-top:10px; color:#2563eb;">฿ 15,420</div>
        </div>
        <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <strong>จำนวนลูกค้า</strong>
          <div style="font-size:2rem; margin-top:10px; color:#059669;">482</div>
        </div>
        <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <strong>สถานะห้อง</strong>
          <div style="font-size:2rem; margin-top:10px; color:#dc2626;">12/15</div>
        </div>
        <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <strong>Therapist วันนี้</strong>
          <div style="font-size:2rem; margin-top:10px; color:#7c3aed;">8</div>
        </div>
      </div>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06); margin-top:20px;">
        <h3>Features:</h3>
        <ul>
          <li>ภาพรวมวันนี้</li>
          <li>ยอดขาย</li>
          <li>จำนวนลูกค้า</li>
          <li>สถานะห้อง</li>
          <li>Therapist วันนี้</li>
          <li>สรุปยอดรายวัน</li>
        </ul>
      </div>
    </section>
  `
})
export class DashboardComponent {}
