import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <section>
      <h1>Administration</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <p>Features:</p>
        <ul>
          <li>Users</li>
          <li>Roles / Permissions</li>
          <li>Audit Log</li>
          <li>System Log</li>
        </ul>
      </div>
    </section>
  `
})
export class AdminComponent {}
