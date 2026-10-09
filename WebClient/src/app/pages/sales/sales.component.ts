import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  standalone: true,
  template: `
    <section>
      <h1>Sales</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Monthly sales report</p>
        <ul>
          <li>Jan: ฿ 120,000</li>
          <li>Feb: ฿ 135,500</li>
          <li>Mar: ฿ 144,200</li>
        </ul>
      </div>
    </section>
  `
})
export class SalesComponent {}
