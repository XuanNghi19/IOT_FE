import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

interface DeviceHistory {
  id: number;
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
    { id: 1, device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T08:30:00') },
    { id: 2, device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T09:15:00') },
    { id: 3, device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T10:00:00') },
    { id: 4, device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T11:00:00') },
    { id: 5, device: 'Phun Sương', status: 'Bật', timestamp: new Date('2024-02-11T11:30:00') },
    { id: 6, device: 'Bóng Đèn', status: 'Tắt', timestamp: new Date('2024-02-11T12:00:00') },
    { id: 7, device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T12:45:00') },
    { id: 8, device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T13:15:00') },
    { id: 9, device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T14:00:00') },
    { id: 10, device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T15:30:00') },
    { id: 11, device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T08:30:00') },
    { id: 12, device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T09:15:00') },
    { id: 13, device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T10:00:00') },
    { id: 14, device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T11:00:00') },
    { id: 15, device: 'Phun Sương', status: 'Bật', timestamp: new Date('2024-02-11T11:30:00') },
    { id: 16, device: 'Bóng Đèn', status: 'Tắt', timestamp: new Date('2024-02-11T12:00:00') },
    { id: 17, device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T12:45:00') },
    { id: 18, device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T13:15:00') },
    { id: 19, device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T14:00:00') },
    { id: 20, device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T15:30:00') },
    { id: 21, device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T08:30:00') },
    { id: 22, device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T09:15:00') },
    { id: 23, device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T10:00:00') },
    { id: 24, device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T11:00:00') },
    { id: 25, device: 'Phun Sương', status: 'Bật', timestamp: new Date('2024-02-11T11:30:00') },
    { id: 26, device: 'Bóng Đèn', status: 'Tắt', timestamp: new Date('2024-02-11T12:00:00') },
    { id: 27, device: 'Điều Hòa', status: 'Bật', timestamp: new Date('2024-02-11T12:45:00') },
    { id: 28, device: 'Phun Sương', status: 'Tắt', timestamp: new Date('2024-02-11T13:15:00') },
    { id: 29, device: 'Bóng Đèn', status: 'Bật', timestamp: new Date('2024-02-11T14:00:00') },
    { id: 30, device: 'Điều Hòa', status: 'Tắt', timestamp: new Date('2024-02-11T15:30:00') }
  ];

  filteredHistory = [...this.history];
  searchtDate: Date | null = null;
}
