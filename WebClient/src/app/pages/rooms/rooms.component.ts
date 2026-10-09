import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Operations</div>
            <h2 style="margin:6px 0 0;">ห้อง / เตียง</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + เพิ่มห้อง
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap:16px;">
          <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:16px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Room 01</strong>
              <span style="background:#10b981; color:white; border-radius:999px; padding:6px 8px; font-size:0.72rem; font-weight:700;">Available</span>
            </div>
            <div style="margin-top:12px; color:#374151;">Massage Room</div>
            <div style="margin-top:8px; color:#6b7280;">Ready for service</div>
          </div>

          <div style="background:#fef3c7; border:1px solid #fcd34d; border-radius:16px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Room 02</strong>
              <span style="background:#f59e0b; color:white; border-radius:999px; padding:6px 8px; font-size:0.72rem; font-weight:700;">In Use</span>
            </div>
            <div style="margin-top:12px; color:#374151;">Foot Massage</div>
            <div style="margin-top:8px; color:#6b7280;">Therapist: Ploy</div>
          </div>

          <div style="background:#dbeafe; border:1px solid #bfdbfe; border-radius:16px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Room 05</strong>
              <span style="background:#3b82f6; color:white; border-radius:999px; padding:6px 8px; font-size:0.72rem; font-weight:700;">Booked</span>
            </div>
            <div style="margin-top:12px; color:#374151;">Massage 90 mins</div>
            <div style="margin-top:8px; color:#6b7280;">Reserved for 10:30</div>
          </div>

          <div style="background:#f3f4f6; border:1px solid #e5e7eb; border-radius:16px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Room 08</strong>
              <span style="background:#6b7280; color:white; border-radius:999px; padding:6px 8px; font-size:0.72rem; font-weight:700;">Cleaning</span>
            </div>
            <div style="margin-top:12px; color:#374151;">Deep Cleaning</div>
            <div style="margin-top:8px; color:#6b7280;">Maintenance under process</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class RoomsComponent {}

