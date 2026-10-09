import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#dbeafe,#f8fafc);">
      <router-outlet></router-outlet>
    </div>
  `
})
export class BlankLayoutComponent {}
