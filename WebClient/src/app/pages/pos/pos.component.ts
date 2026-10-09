import { Component } from '@angular/core';

@Component({
  selector: 'app-pos',
  standalone: true,
  template: `
    <section>
      <h1>Point of Sale</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06); max-width:700px;">
        <p>POS transaction screen</p>
        <ul>
          <li>Item list</li>
          <li>Customer selection</li>
          <li>Payment method</li>
          <li>Receipt preview</li>
        </ul>
      </div>
    </section>
  `
})
export class PosComponent {}
