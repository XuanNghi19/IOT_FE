import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

interface SensorData {
  id: number;
  timestamp: Date;
  temperature: number;
  humidity: number;
  light: number;
}

@Component({
  selector: 'app-sensor-data',
  imports: [
    MenuComponent,
    CommonModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    InputNumberModule
  ],
  templateUrl: './sensor-data.component.html',
  styleUrl: './sensor-data.component.css'
})
export class SensorDataComponent {
  searchValue: number | null = null;
  selectedSensorType: any = null;

  sensorTypes = [
    { name: 'Tất cả', value: '' },
    { name: 'Nhiệt độ', value: 'temperature' },
    { name: 'Độ ẩm', value: 'humidity' },
    { name: 'Ánh sáng', value: 'light' } 
  ];

  sensorData: SensorData[] = [
    { id: 1, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 2, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 3, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { id: 4, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 5, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 6, timestamp: new Date('2024-02-11T08:30:00'), temperature: 24.8, humidity: 70, light: 600 },
    { id: 7, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 8, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 9, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { id: 10, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 11, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 12, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { id: 13, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 14, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 15, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { id: 16, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 17, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 18, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { id: 19, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 20, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 21, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { id: 22, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { id: 23, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 24, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 25, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { id: 26, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 27, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 28, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { id: 29, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 30, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 31, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { id: 32, timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { id: 32, timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { id: 33, timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
  ];
}
