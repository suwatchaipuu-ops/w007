import { Component } from '@angular/core';

type Service = {
  id: number;
  title: string;
  desc: string;
  duration: number;
  price: number;
  category: string;
  color: string;
};

type CartItem = Service & {
  quantity: number;
};

@Component({
  selector: 'app-pos',
  standalone: true,
  template: `
    <section style="display:grid; grid-template-columns: 1.75fr 0.95fr; gap:20px;">
      <div style="background:white; border-radius:18px; padding:20px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Catalog</div>
            <h2 style="margin:6px 0 0;">เลือกบริการ</h2>
          </div>
          <button style="border:none; background:#2563eb; color:white; padding:10px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
            + เปิดบิลใหม่
          </button>
        </div>

        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px;">
          <button
            *ngFor="let category of categories"
            [style.background]="activeCategory === category ? '#111827' : '#f3f4f6'"
            [style.color]="activeCategory === category ? '#fff' : '#374151'"
            [style.border]="activeCategory === category ? '1px solid #111827' : '1px solid #e5e7eb'"
            style="padding:8px 14px; border-radius:999px; cursor:pointer; font-weight:600;"
            (click)="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:16px;">
          <button
            *ngFor="let service of filteredServices"
            type="button"
            (click)="addToCart(service)"
            style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:16px; padding:0; cursor:pointer; text-align:left; overflow:hidden;"
          >
            <div
              [style.background]="service.color"
              style="padding:14px 16px; color:white; font-weight:700; display:flex; justify-content:space-between; align-items:center;"
            >
              <span>{{ service.duration }} นาที</span>
              <span>◌</span>
            </div>

            <div style="padding:16px;">
              <div style="font-size:1.1rem; font-weight:700; color:#111827;">{{ service.title }}</div>
              <div style="margin-top:6px; color:#6b7280; font-size:0.9rem;">{{ service.desc }}</div>
              <div style="margin-top:14px; display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:1.2rem; color:#111827;">฿{{ service.price | number }}</strong>
                <span style="background:#2563eb; color:white; border-radius:999px; padding:8px 10px; font-size:0.8rem; font-weight:700;">เพิ่ม</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      <aside style="background:white; border-radius:18px; padding:20px; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <div>
            <div style="font-size:0.8rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Receipt</div>
            <h3 style="margin:6px 0 0;">บิล #A-0284</h3>
          </div>
          <button
            type="button"
            (click)="clearCart()"
            style="border:none; background:#f3f4f6; color:#374151; padding:8px 10px; border-radius:10px; cursor:pointer;"
          >
            ล้าง
          </button>
        </div>

        <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">
          <button style="display:flex; justify-content:space-between; padding:12px 14px; border:1px solid #e5e7eb; border-radius:12px; background:#f8fafc; cursor:pointer;">
            <span>พนักงาน</span>
            <strong>น้ำฝน</strong>
          </button>

          <button style="display:flex; justify-content:space-between; padding:12px 14px; border:1px solid #e5e7eb; border-radius:12px; background:#f8fafc; cursor:pointer;">
            <span>ห้องบริการ</span>
            <strong>ห้อง 03</strong>
          </button>
        </div>

        <div *ngIf="cart.length === 0" style="padding:24px 12px; text-align:center; color:#6b7280;">
          ยังไม่มีรายการ
        </div>

        <div *ngIf="cart.length > 0" style="display:flex; flex-direction:column; gap:12px;">
          <div *ngFor="let item of cart" style="display:flex; gap:10px; padding:12px; border:1px solid #e5e7eb; border-radius:12px;">
            <div [style.background]="item.color" style="width:10px; border-radius:999px;"></div>
            <div style="flex:1;">
              <div style="font-weight:700; color:#111827;">{{ item.title }}</div>
              <div style="font-size:0.8rem; color:#6b7280;">{{ item.duration }} นาที</div>
              <div style="display:flex; align-items:center; gap:8px; margin-top:8px;">
                <button
                  type="button"
                  (click)="changeQuantity(item.id, -1)"
                  style="width:28px; height:28px; border:1px solid #d1d5db; border-radius:8px; background:white; cursor:pointer;"
                >
                  -
                </button>
                <strong>{{ item.quantity }}</strong>
                <button
                  type="button"
                  (click)="changeQuantity(item.id, 1)"
                  style="width:28px; height:28px; border:1px solid #d1d5db; border-radius:8px; background:white; cursor:pointer;"
                >
                  +
                </button>
              </div>
            </div>
            <div style="font-weight:700; color:#111827;">฿{{ (item.price * item.quantity) | number }}</div>
          </div>
        </div>

        <div style="border-top:1px solid #e5e7eb; margin-top:18px; padding-top:18px;">
          <div style="display:flex; justify-content:space-between; margin:8px 0;">
            <span>ยอดรวม</span>
            <strong>฿{{ subtotal | number }}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin:8px 0; color:#059669;">
            <span>ส่วนลดสมาชิก</span>
            <strong>-฿{{ discount | number }}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin:10px 0 18px;">
            <span style="font-size:0.9rem; color:#6b7280;">ยอดสุทธิ</span>
            <strong style="font-size:1.8rem; color:#111827;">฿{{ total | number }}</strong>
          </div>

          <button
            type="button"
            [disabled]="cart.length === 0"
            (click)="openPayment()"
            style="width:100%; border:none; border-radius:12px; background:linear-gradient(135deg,#10b981,#059669); color:white; padding:14px 16px; font-size:1rem; font-weight:700; cursor:pointer;"
          >
            ชำระเงิน
          </button>
        </div>
      </aside>
    </section>

    <div *ngIf="paymentOpen" style="position:fixed; inset:0; background:rgba(0,0,0,0.35); display:flex; align-items:center; justify-content:center; z-index:50;">
      <div style="background:white; border-radius:18px; width:480px; max-width:calc(100vw - 40px); padding:24px; box-shadow:0 20px 50px rgba(0,0,0,0.2);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.75rem; color:#6b7280; letter-spacing:0.08em; text-transform:uppercase;">Payment</div>
            <h2 style="margin:6px 0 0;">เลือกวิธีชำระเงิน</h2>
          </div>
          <button type="button" (click)="paymentOpen = false" style="background:#f3f4f6; border:none; border-radius:8px; width:32px; height:32px; cursor:pointer;">
            ✕
          </button>
        </div>

        <div style="margin-top:18px; font-size:1.5rem; font-weight:700; text-align:center; color:#111827;">
          ฿{{ total | number }}
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:12px; margin-top:18px;">
          <button type="button" (click)="completePayment()" style="padding:16px 10px; border:1px solid #d1d5db; border-radius:12px; background:#f8fafc; cursor:pointer;">
            เงินสด
          </button>
          <button type="button" (click)="completePayment()" style="padding:16px 10px; border:1px solid #d1d5db; border-radius:12px; background:#f8fafc; cursor:pointer;">
            QR
          </button>
          <button type="button" (click)="completePayment()" style="padding:16px 10px; border:1px solid #d1d5db; border-radius:12px; background:#f8fafc; cursor:pointer;">
            บัตร
          </button>
        </div>
      </div>
    </div>
  `,
})
export class PosComponent {
  activeCategory = 'ทั้งหมด';
  paymentOpen = false;

  categories = ['ทั้งหมด', 'นวดไทย', 'อโรมา', 'สปา', 'แพ็กเกจ'];

  services: Service[] = [
    { id: 1, title: 'นวดไทย', desc: 'ผ่อนคลายกล้ามเนื้อด้วยศาสตร์ไทย', duration: 60, price: 350, category: 'นวดไทย', color: '#2563eb' },
    { id: 2, title: 'นวดไทย', desc: 'ผ่อนคลายกล้ามเนื้อด้วยศาสตร์ไทย', duration: 90, price: 500, category: 'นวดไทย', color: '#3b82f6' },
    { id: 3, title: 'นวดน้ำมันอโรม่า', desc: 'น้ำมันหอมระเหยช่วยให้ผ่อนคลาย', duration: 60, price: 550, category: 'อโรมา', color: '#a855f7' },
    { id: 4, title: 'นวดน้ำมันอโรม่า', desc: 'น้ำมันหอมระเหยช่วยให้ผ่อนคลาย', duration: 90, price: 750, category: 'อโรมา', color: '#8b5cf6' },
    { id: 5, title: 'นวดฝ่าเท้า', desc: 'กระตุ้นจุดสะท้อนเพื่อสุขภาพ', duration: 60, price: 400, category: 'สปา', color: '#10b981' },
    { id: 6, title: 'นวดประคบสมุนไพร', desc: 'ประคบร้อน คลายอาการปวดเมื่อย', duration: 90, price: 650, category: 'สปา', color: '#14b8a6' },
    { id: 7, title: 'สครับผิวกาย', desc: 'ผลัดเซลล์ผิวอย่างอ่อนโยน', duration: 45, price: 600, category: 'สปา', color: '#f59e0b' },
    { id: 8, title: 'แพ็กเกจอิ่มเอม', desc: 'นวดไทย + ประคบสมุนไพร', duration: 120, price: 890, category: 'แพ็กเกจ', color: '#ef4444' },
  ];

  cart: CartItem[] = [
    { ...this.services[2], quantity: 1 },
    { ...this.services[4], quantity: 1 },
  ];

  get filteredServices(): Service[] {
    return this.services.filter((service) =>
      this.activeCategory === 'ทั้งหมด' ? true : service.category === this.activeCategory
    );
  }

  get subtotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get discount(): number {
    return this.subtotal >= 900 ? 100 : 0;
  }

  get total(): number {
    return this.subtotal - this.discount;
  }

  addToCart(service: Service): void {
    const existing = this.cart.find((item) => item.id === service.id);

    if (existing) {
      this.cart = this.cart.map((item) =>
        item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return;
    }

    this.cart = [...this.cart, { ...service, quantity: 1 }];
  }

  changeQuantity(id: number, diff: number): void {
    this.cart = this.cart
      .map((item) => (item.id === id ? { ...item, quantity: item.quantity + diff } : item))
      .filter((item) => item.quantity > 0);
  }

  clearCart(): void {
    this.cart = [];
  }

  openPayment(): void {
    if (this.cart.length > 0) {
      this.paymentOpen = true;
    }
  }

  completePayment(): void {
    this.paymentOpen = false;
    this.cart = [];
    alert('ชำระเงินสำเร็จ');
  }
}
