import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ChartComponent,
  ApexAxisChartSeries,
  NgApexchartsModule,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
import { MenuComponent } from "../menu/menu.component";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors?: string[]; // Thêm `colors`
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule,
    ChartComponent,
    MenuComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  temperature = 25; // Giá trị nhiệt độ mặc định
  humidity = 60; // Giá trị độ ẩm mặc định
  light = 300; // Giá trị ánh sáng mặc định

  toggleState = {
    temperature: false,
    humidity: false,
    light: false,
  };

  toggle(key: 'temperature' | 'humidity' | 'light') {
    this.toggleState[key] = !this.toggleState[key];
  }

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Nhiệt độ",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Độ ẩm",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "Ánh sáng",
          data: [21, 42, 55, 42, 44, 62, 51]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      colors: ["#fb2c36", "#146aff", "#ffd342"], // Màu sắc của biểu đồ
      dataLabels: {
        enabled: false,
        style: {
          colors: ["#fb2c36", "#146aff", "#ffd342"]
        }
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  public generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

}
