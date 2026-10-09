import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  standalone: true,
  template: `
    <section>
      <h1>Package / Course</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>รายการ Package</li>
          <li>สร้าง Package</li>
          <li>Package ลูกค้า</li>
          <li>การใช้สิทธิ์</li>
          <li>วันหมดอายุ</li>
        </ul>
      </div>
    </section>
  `
})
export class PackagesComponent {}
