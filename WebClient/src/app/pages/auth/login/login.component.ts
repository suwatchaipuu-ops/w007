import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div style="width:420px; background:white; border-radius:16px; padding:32px; box-shadow:0 20px 45px rgba(0,0,0,0.12);">
      <h2 style="margin-top:0;">Login</h2>
      <form (submit)="login(); $event.preventDefault()" style="display:flex; flex-direction:column; gap:16px;">
        <input type="email" placeholder="Email" style="padding:12px; border:1px solid #d1d5db; border-radius:10px;" />
        <input type="password" placeholder="Password" style="padding:12px; border:1px solid #d1d5db; border-radius:10px;" />
        <button type="submit" style="padding:12px; border:none; border-radius:10px; background:#2563eb; color:white; cursor:pointer;">
          Sign in
        </button>
      </form>
    </div>
  `
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(): void {
    localStorage.setItem('token', 'demo-token');
    this.router.navigateByUrl('/dashboard');
  }
}
