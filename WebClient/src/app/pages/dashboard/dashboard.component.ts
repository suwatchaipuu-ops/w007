import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section>
      <h1>Dashboard</h1>
      <p>Sales summary and overview.</p>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:16px; margin-top:20px;">
        <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <strong>Today</strong>
          <div style="font-size:2rem; margin-top:10px;">฿ 15,420</div>
        </div>
        <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <strong>Orders</strong>
          <div style="font-size:2rem; margin-top:10px;">128</div>
        </div>
        <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <strong>Customers</strong>
          <div style="font-size:2rem; margin-top:10px;">482</div>
        </div>
      </div>
    </section>
  `
})
export class DashboardComponent {}
