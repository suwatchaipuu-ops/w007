import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: true,
  template: `
    <section>
      <h1>Analytics</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>Sales Trend</li>
          <li>Service Ranking</li>
          <li>Therapist Performance</li>
          <li>Customer ใหม่ / เก่า</li>
          <li>Peak Hour</li>
        </ul>
      </div>
    </section>
  `
})
export class AnalyticsComponent {}
