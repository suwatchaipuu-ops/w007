import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  standalone: true,
  template: `
    <section>
      <h1>ลูกค้า</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>รายชื่อลูกค้า</li>
          <li>เพิ่มลูกค้า</li>
          <li>ข้อมูลลูกค้า</li>
          <li>ประวัติการใช้บริการ</li>
          <li>Package</li>
          <li>Voucher</li>
          <li>Point</li>
          <li>Customer Tags</li>
        </ul>
      </div>
    </section>
  `
})
export class CustomersComponent {}
