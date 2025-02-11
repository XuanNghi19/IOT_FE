import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

interface DeviceHistory {
  device: string; 
  status: string;
  timestamp: Date;
}

@Component({
  standalone: true,
  selector: 'app-history',
  imports: [
    MenuComponent, 
    CommonModule, 
    TableModule,
    ButtonModule,
    CalendarModule,
    FormsModule
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  public history: DeviceHistory[] = [
    { device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T08:30:00') },
    { device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T09:15:00') },
    { device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T10:00:00') },
    { device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T11:00:00') },
    { device: 'Phun Sương', status: 'Bật', timestamp: new Date('2024-02-11T11:30:00') },
    { device: 'Bóng Đèn', status: 'Tắt', timestamp: new Date('2024-02-11T12:00:00') },
    { device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T12:45:00') },
    { device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T13:15:00') },
    { device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T14:00:00') },
    { device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T15:30:00') },
    { device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T08:30:00') },
    { device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T09:15:00') },
    { device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T10:00:00') },
    { device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T11:00:00') },
    { device: 'Phun Sương', status: 'Bật', timestamp: new Date('2024-02-11T11:30:00') },
    { device: 'Bóng Đèn', status: 'Tắt', timestamp: new Date('2024-02-11T12:00:00') },
    { device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T12:45:00') },
    { device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T13:15:00') },
    { device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T14:00:00') },
    { device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T15:30:00') },
    { device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T08:30:00') },
    { device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T09:15:00') },
    { device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T10:00:00') },
    { device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T11:00:00') },
    { device: 'Phun Sương', status: 'Bật', timestamp: new Date('2024-02-11T11:30:00') },
    { device: 'Bóng Đèn', status: 'Tắt', timestamp: new Date('2024-02-11T12:00:00') },
    { device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T12:45:00') },
    { device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T13:15:00') },
    { device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T14:00:00') },
    { device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T15:30:00') }
  ];

  filteredHistory = [...this.history];
  startDate: Date | null = null;
  endDate: Date | null = null;
}
