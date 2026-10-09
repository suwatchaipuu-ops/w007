import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <section>
      <h1>ตั้งค่า</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>สาขา</li>
          <li>ห้อง / เตียง</li>
          <li>Services</li>
          <li>ราคา</li>
          <li>Therapist</li>
          <li>Commission Rules</li>
          <li>Payment Methods</li>
          <li>Tax / Receipt</li>
          <li>System Settings</li>
        </ul>
      </div>
    </section>
  `
})
export class SettingsComponent {}
