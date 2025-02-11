import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

interface SensorData {
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
    TableModule
  ],
  templateUrl: './sensor-data.component.html',
  styleUrl: './sensor-data.component.css'
})
export class SensorDataComponent {
  sensorData: SensorData[] = [
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
    { timestamp: new Date(), temperature: 25.3, humidity: 60, light: 500 },
    { timestamp: new Date(), temperature: 26.1, humidity: 55, light: 450 },
    { timestamp: new Date(), temperature: 24.8, humidity: 70, light: 600 },
  ];
}
