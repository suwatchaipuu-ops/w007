import { Component } from '@angular/core';

@Component({
  selector: 'app-therapists',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Staff</div>
            <h2 style="margin:6px 0 0;">Therapist / พนักงาน</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + เพิ่มพนักงาน
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Mook</strong>
              <span style="background:#ecfdf5; color:#047857; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Available</span>
            </div>
            <div style="margin-top:10px; color:#6b7280;">Massage • Facial • Reflexology</div>
            <div style="margin-top:12px; color:#374151;">Today: 5 appointments</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Nina</strong>
              <span style="background:#fef3c7; color:#92400e; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Busy</span>
            </div>
            <div style="margin-top:10px; color:#6b7280;">Thai Massage • Body Scrub</div>
            <div style="margin-top:12px; color:#374151;">Today: 7 appointments</div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Ploy</strong>
              <span style="background:#dbeafe; color:#1d4ed8; border-radius:999px; padding:6px 10px; font-size:0.72rem; font-weight:700;">Booked</span>
            </div>
            <div style="margin-top:10px; color:#6b7280;">Foot Massage • Aroma Therapy</div>
            <div style="margin-top:12px; color:#374151;">Today: 4 appointments</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TherapistsComponent {}
