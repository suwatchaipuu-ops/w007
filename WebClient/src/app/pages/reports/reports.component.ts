import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  template: `
    <section>
      <div style="background:white; border-radius:18px; padding:22px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Analytics</div>
            <h2 style="margin:6px 0 0;">Reports</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + Export
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap:16px; margin-bottom:20px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Sales</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">฿ 125k</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Services</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">432</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Top Therapist</div>
            <div style="font-size:1.4rem; font-weight:700; margin-top:8px;">Mook</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:16px;">
            <div style="font-size:0.8rem; color:#6b7280;">Retention</div>
            <div style="font-size:1.8rem; font-weight:700; margin-top:8px;">82%</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 1.8fr 1fr; gap:20px;">
          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:18px;">
            <h3 style="margin:0 0 16px;">Monthly Sales Trend</h3>
            <div style="display:flex; align-items:flex-end; gap:12px; height:200px; padding-top:12px;">
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; height:100%;">
                <div style="width:100%; max-width:40px; height:45%; background:#2563eb; border-radius:10px 10px 0 0;"></div>
                <div style="margin-top:8px; color:#6b7280; font-size:0.8rem;">Jan</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; height:100%;">
                <div style="width:100%; max-width:40px; height:60%; background:#3b82f6; border-radius:10px 10px 0 0;"></div>
                <div style="margin-top:8px; color:#6b7280; font-size:0.8rem;">Feb</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; height:100%;">
                <div style="width:100%; max-width:40px; height:72%; background:#60a5fa; border-radius:10px 10px 0 0;"></div>
                <div style="margin-top:8px; color:#6b7280; font-size:0.8rem;">Mar</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; height:100%;">
                <div style="width:100%; max-width:40px; height:80%; background:#93c5fd; border-radius:10px 10px 0 0;"></div>
                <div style="margin-top:8px; color:#6b7280; font-size:0.8rem;">Apr</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; height:100%;">
                <div style="width:100%; max-width:40px; height:92%; background:#2563eb; border-radius:10px 10px 0 0;"></div>
                <div style="margin-top:8px; color:#6b7280; font-size:0.8rem;">May</div>
              </div>
            </div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:18px;">
            <h3 style="margin:0 0 16px;">Top Services</h3>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div>
                <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                  <span>นวดไทย 60 นาที</span>
                  <strong>38%</strong>
                </div>
                <div style="height:8px; background:#e5e7eb; border-radius:999px; overflow:hidden;">
                  <div style="width:38%; height:100%; background:#2563eb; border-radius:999px;"></div>
                </div>
              </div>

              <div>
                <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                  <span>อโรมา 90 นาที</span>
                  <strong>27%</strong>
                </div>
                <div style="height:8px; background:#e5e7eb; border-radius:999px; overflow:hidden;">
                  <div style="width:27%; height:100%; background:#10b981; border-radius:999px;"></div>
                </div>
              </div>

              <div>
                <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                  <span>สครับผิวกาย</span>
                  <strong>19%</strong>
                </div>
                <div style="height:8px; background:#e5e7eb; border-radius:999px; overflow:hidden;">
                  <div style="width:19%; height:100%; background:#f59e0b; border-radius:999px;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ReportsComponent {}
