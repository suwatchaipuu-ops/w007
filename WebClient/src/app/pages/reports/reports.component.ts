import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  template: `
    <section>
      <h1>Reports</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>Sales Report</li>
          <li>Service Report</li>
          <li>Therapist Performance</li>
          <li>Commission Report</li>
          <li>Payment Report</li>
          <li>Customer Report</li>
          <li>Package Report</li>
          <li>Inventory Report</li>
          <li>Profit / Cost</li>
        </ul>
      </div>
    </section>
  `
})
export class ReportsComponent {}
