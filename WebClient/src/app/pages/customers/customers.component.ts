import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  standalone: true,
  template: `
    <section>
      <h1>Customers</h1>
      <table style="width:100%; border-collapse:collapse; background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <thead>
          <tr style="background:#e5e7eb;">
            <th style="padding:12px; text-align:left;">Name</th>
            <th style="padding:12px; text-align:left;">Phone</th>
            <th style="padding:12px; text-align:left;">Membership</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:12px;">Alice</td><td style="padding:12px;">081-111-1111</td><td style="padding:12px;">Gold</td></tr>
          <tr><td style="padding:12px;">Bob</td><td style="padding:12px;">082-222-2222</td><td style="padding:12px;">Silver</td></tr>
        </tbody>
      </table>
    </section>
  `
})
export class CustomersComponent {}
