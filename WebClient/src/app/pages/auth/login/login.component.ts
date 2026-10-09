import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div style="min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#dbeafe,#f8fafc);">
      <div style="width:420px; background:white; border-radius:16px; padding:32px; box-shadow:0 20px 45px rgba(0,0,0,0.12);">
        <div style="text-align:center; margin-bottom:20px;">
          <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Massage POS</div>
          <h2 style="margin:8px 0 0; font-size:2rem;">Login</h2>
        </div>

        <form (submit)="login(); $event.preventDefault()" style="display:flex; flex-direction:column; gap:16px;">
          <div>
            <label style="display:block; margin-bottom:8px; color:#374151; font-weight:600;">Email</label>
            <input
              type="email"
              value="admin@spa.com"
              style="width:100%; padding:12px 14px; border:1px solid #d1d5db; border-radius:10px; font-size:1rem;"
            />
          </div>

          <div>
            <label style="display:block; margin-bottom:8px; color:#374151; font-weight:600;">Password</label>
            <input
              type="password"
              value="123456"
              style="width:100%; padding:12px 14px; border:1px solid #d1d5db; border-radius:10px; font-size:1rem;"
            />
          </div>

          <button
            type="submit"
            style="padding:14px; border:none; border-radius:10px; background:linear-gradient(135deg,#2563eb,#3b82f6); color:white; font-size:1rem; font-weight:700; cursor:pointer;"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  `,
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(): void {
    localStorage.setItem('token', 'demo-token');
    this.router.navigateByUrl('/dashboard');
  }
}
