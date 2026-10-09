import { Component } from '@angular/core';

@Component({
  selector: 'app-pos',
  standalone: true,
  template: `
    <section style="display:grid; grid-template-columns: 1.7fr 0.9fr; gap:20px;">
      <div style="background:white; border-radius:18px; padding:20px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Transaction</div>
            <h2 style="margin:6px 0 0;">POS / ขาย</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + เปิดบิลใหม่
          </button>
        </div>

        <div style="display:grid; grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 0.8fr; gap:10px; margin-bottom:18px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; font-weight:600;">รายการ</div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; font-weight:600;">Therapist</div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; font-weight:600;">ห้อง</div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; font-weight:600;">เวลา</div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; font-weight:600;">ราคา</div>
        </div>

        <div style="display:grid; grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 0.8fr; gap:10px; padding:14px 0; border-bottom:1px solid #e5e7eb; align-items:center;">
          <div>
            <div style="font-weight:600;">Massage 90 นาที</div>
            <div style="font-size:0.8rem; color:#6b7280;">Classic Therapy</div>
          </div>
          <div style="color:#374151;">Nina</div>
          <div style="color:#374151;">Room 05</div>
          <div style="color:#374151;">10:30</div>
          <div style="font-weight:700; color:#111827;">฿ 1,200</div>
        </div>

        <div style="display:grid; grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 0.8fr; gap:10px; padding:14px 0; border-bottom:1px solid #e5e7eb; align-items:center;">
          <div>
            <div style="font-weight:600;">Facial Treatment</div>
            <div style="font-size:0.8rem; color:#6b7280;">Glow Care</div>
          </div>
          <div style="color:#374151;">Mook</div>
          <div style="color:#374151;">Room 02</div>
          <div style="color:#374151;">12:00</div>
          <div style="font-weight:700; color:#111827;">฿ 850</div>
        </div>

        <div style="display:grid; grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 0.8fr; gap:10px; padding:14px 0; align-items:center;">
          <div>
            <div style="font-weight:600;">Foot Massage</div>
            <div style="font-size:0.8rem; color:#6b7280;">Relax Package</div>
          </div>
          <div style="color:#374151;">Ploy</div>
          <div style="color:#374151;">Room 07</div>
          <div style="color:#374151;">13:45</div>
          <div style="font-weight:700; color:#111827;">฿ 650</div>
        </div>
      </div>

      <aside style="background:white; border-radius:18px; padding:20px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <h3 style="margin:0 0 18px;">Payment Summary</h3>

        <div style="display:flex; justify-content:space-between; margin:10px 0; color:#374151;">
          <span>Subtotal</span>
          <strong>฿ 2,700</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin:10px 0; color:#374151;">
          <span>Discount</span>
          <strong>-฿ 250</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin:10px 0; color:#374151;">
          <span>Package</span>
          <strong>฿ 0</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin:10px 0; color:#374151;">
          <span>VAT</span>
          <strong>฿ 216</strong>
        </div>

        <div style="border-top:1px solid #e5e7eb; margin:16px 0; padding-top:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.9rem; color:#6b7280;">Total</span>
            <strong style="font-size:1.8rem; color:#111827;">฿ 2,666</strong>
          </div>
        </div>

        <div style="margin:18px 0;">
          <div style="font-size:0.8rem; color:#6b7280; margin-bottom:8px;">Payment Method</div>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <span style="background:#eff6ff; color:#1d4ed8; border-radius:999px; padding:8px 12px; font-size:0.82rem; font-weight:600;">Cash</span>
            <span style="background:#ecfdf5; color:#047857; border-radius:999px; padding:8px 12px; font-size:0.82rem; font-weight:600;">PromptPay</span>
            <span style="background:#f5f3ff; color:#6d28d9; border-radius:999px; padding:8px 12px; font-size:0.82rem; font-weight:600;">Card</span>
          </div>
        </div>

        <button style="width:100%; border:none; background:linear-gradient(135deg,#10b981,#059669); color:white; padding:14px 16px; border-radius:12px; font-size:1rem; font-weight:700; cursor:pointer;">
          ชำระเงิน
        </button>
      </aside>
    </section>
  `
})
export class PosComponent {}

