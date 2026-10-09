import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <section>
      <h1>Products</h1>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:16px;">
        <div style="background:white; border-radius:12px; padding:18px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <h3>Hair Treatment</h3>
          <p>฿ 299</p>
        </div>
        <div style="background:white; border-radius:12px; padding:18px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <h3>Nail Care</h3>
          <p>฿ 450</p>
        </div>
        <div style="background:white; border-radius:12px; padding:18px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <h3>Massage Package</h3>
          <p>฿ 699</p>
        </div>
      </div>
    </section>
  `
})
export class ProductsComponent {}
