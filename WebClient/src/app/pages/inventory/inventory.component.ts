import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  standalone: true,
  template: `
    <section>
      <h1>สินค้า / Inventory</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>รายการสินค้า</li>
          <li>Stock</li>
          <li>รับสินค้า</li>
          <li>ตัด Stock</li>
          <li>ปรับ Stock</li>
          <li>Stock Movement</li>
        </ul>
      </div>
    </section>
  `
})
export class InventoryComponent {}
