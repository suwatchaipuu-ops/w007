import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Schedule</div>
            <h2 style="margin:6px 0 0;">Booking / ปฏิทินนัดหมาย</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + นัดหมายใหม่
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(7, minmax(0,1fr)); gap:12px; margin-bottom:20px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:0.8rem; color:#6b7280;">Mon</div>
            <div style="font-size:1.2rem; font-weight:700; margin-top:8px;">8</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:0.8rem; color:#6b7280;">Tue</div>
            <div style="font-size:1.2rem; font-weight:700; margin-top:8px;">9</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:0.8rem; color:#6b7280;">Wed</div>
            <div style="font-size:1.2rem; font-weight:700; margin-top:8px;">10</div>
          </div>
          <div style="background:#dbeafe; border:1px solid #bfdbfe; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:0.8rem; color:#1d4ed8;">Thu</div>
            <div style="font-size:1.2rem; font-weight:700; margin-top:8px;">11</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:0.8rem; color:#6b7280;">Fri</div>
            <div style="font-size:1.2rem; font-weight:700; margin-top:8px;">12</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:0.8rem; color:#6b7280;">Sat</div>
            <div style="font-size:1.2rem; font-weight:700; margin-top:8px;">13</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:0.8rem; color:#6b7280;">Sun</div>
            <div style="font-size:1.2rem; font-weight:700; margin-top:8px;">14</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:16px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:700;">10:00 AM</span>
              <span style="background:#ecfdf5; color:#047857; border-radius:999px; padding:6px 8px; font-size:0.72rem; font-weight:700;">Confirmed</span>
            </div>
            <div style="margin-top:12px; font-size:1.05rem; font-weight:600;">Nina Smith</div>
            <div style="margin-top:6px; color:#6b7280;">Massage 90 mins</div>
            <div style="margin-top:10px; color:#374151;">Room 05 • Therapist: Mook</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:700;">11:30 AM</span>
              <span style="background:#fff7ed; color:#c2410c; border-radius:999px; padding:6px 8px; font-size:0.72rem; font-weight:700;">Waiting</span>
            </div>
            <div style="margin-top:12px; font-size:1.05rem; font-weight:600;">Aom Chai</div>
            <div style="margin-top:6px; color:#6b7280;">Foot Massage</div>
            <div style="margin-top:10px; color:#374151;">Room 02 • Therapist: Ploy</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:700;">2:00 PM</span>
              <span style="background:#fef3c7; color:#92400e; border-radius:999px; padding:6px 8px; font-size:0.72rem; font-weight:700;">Pending</span>
            </div>
            <div style="margin-top:12px; font-size:1.05rem; font-weight:600;">Boonmee</div>
            <div style="margin-top:6px; color:#6b7280;">Facial Treatment</div>
            <div style="margin-top:10px; color:#374151;">Room 07 • Therapist: Jane</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BookingComponent {}
