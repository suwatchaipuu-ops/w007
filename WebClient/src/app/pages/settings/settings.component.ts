import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <section>
      <h1>Settings</h1>
      <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06); max-width:500px;">
        <p>System configuration</p>
        <ul>
          <li>Business profile</li>
          <li>Tax settings</li>
          <li>Receipt template</li>
          <li>Branch settings</li>
        </ul>
      </div>
    </section>
  `
})
export class SettingsComponent {}
