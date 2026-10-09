import { Component } from '@angular/core';

@Component({
  selector: 'app-promotions',
  standalone: true,
  template: `
    <section>
      <h1>Promotion</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>Promotion</li>
          <li>Discount</li>
          <li>Voucher</li>
          <li>Campaign</li>
        </ul>
      </div>
    </section>
  `
})
export class PromotionsComponent {}
