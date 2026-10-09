import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  standalone: true,
  template: `
    <section>
      <h1>ห้อง / เตียง</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>Room Board</li>
          <li>ห้องว่าง</li>
          <li>กำลังให้บริการ</li>
          <li>จองแล้ว</li>
          <li>กำลังทำความสะอาด</li>
          <li>ปิดใช้งาน</li>
        </ul>
      </div>
    </section>
  `
})
export class RoomsComponent {}
