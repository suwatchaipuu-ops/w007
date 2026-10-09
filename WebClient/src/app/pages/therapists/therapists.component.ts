import { Component } from '@angular/core';

@Component({
  selector: 'app-therapists',
  standalone: true,
  template: `
    <section>
      <h1>Therapist / พนักงาน</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>รายชื่อพนักงาน</li>
          <li>Skill / ความสามารถ</li>
          <li>ตารางงาน</li>
          <li>Check-in / Check-out</li>
          <li>Commission</li>
          <li>สรุปค่ามือ</li>
        </ul>
      </div>
    </section>
  `
})
export class TherapistsComponent {}
