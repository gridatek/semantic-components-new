import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScChartContainer,
  ScChartLegend,
  ScBarChart,
  ScLineChart,
  ScPieChart,
  ScDonutChart,
  ChartDataPoint,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-chart-demo',
  imports: [
    ScChartContainer,
    ScChartLegend,
    ScBarChart,
    ScLineChart,
    ScPieChart,
    ScDonutChart,
  ],
  template: `
    <div class="space-y-12">
      <!-- Bar Chart -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Bar Chart</h3>
        <div class="max-w-lg rounded-lg border p-6">
          <div sc-chart-container>
            <div sc-bar-chart [data]="barData" [height]="250"></div>
            <div sc-chart-legend [items]="barLegend"></div>
          </div>
        </div>
      </div>

      <!-- Line Chart -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Line Chart</h3>
        <div class="max-w-lg rounded-lg border p-6">
          <div sc-chart-container>
            <div sc-line-chart [data]="lineData" [height]="250"></div>
          </div>
        </div>
      </div>

      <!-- Area Chart -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Area Chart</h3>
        <div class="max-w-lg rounded-lg border p-6">
          <div sc-chart-container>
            <div
              sc-line-chart
              [data]="lineData"
              [height]="250"
              [showArea]="true"
            ></div>
          </div>
        </div>
      </div>

      <!-- Pie Chart -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Pie Chart</h3>
        <div class="max-w-sm rounded-lg border p-6">
          <div sc-chart-container>
            <div sc-pie-chart [data]="pieData" [size]="280"></div>
            <div sc-chart-legend [items]="pieLegend"></div>
          </div>
        </div>
      </div>

      <!-- Donut Chart -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Donut Chart</h3>
        <div class="max-w-sm rounded-lg border p-6">
          <div sc-chart-container>
            <div
              sc-donut-chart
              [data]="pieData"
              [size]="280"
              [innerRadius]="70"
            ></div>
            <div sc-chart-legend [items]="pieLegend"></div>
          </div>
        </div>
      </div>

      <!-- Monthly Revenue -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Monthly Revenue</h3>
        <div class="max-w-2xl rounded-lg border p-6">
          <div sc-chart-container>
            <div sc-bar-chart [data]="monthlyData" [height]="300"></div>
          </div>
        </div>
      </div>

      <!-- User Growth -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">User Growth</h3>
        <div class="max-w-2xl rounded-lg border p-6">
          <div sc-chart-container>
            <div
              sc-line-chart
              [data]="growthData"
              [height]="300"
              [showArea]="true"
              [showPoints]="true"
              [labelStep]="2"
            ></div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScChartDemo {
  readonly barData: ChartDataPoint[] = [
    { label: 'Jan', value: 120 },
    { label: 'Feb', value: 180 },
    { label: 'Mar', value: 150 },
    { label: 'Apr', value: 220 },
    { label: 'May', value: 190 },
    { label: 'Jun', value: 250 },
  ];

  readonly barLegend = [{ label: 'Sales' }];

  readonly lineData: ChartDataPoint[] = [
    { label: 'Mon', value: 45 },
    { label: 'Tue', value: 52 },
    { label: 'Wed', value: 49 },
    { label: 'Thu', value: 63 },
    { label: 'Fri', value: 58 },
    { label: 'Sat', value: 72 },
    { label: 'Sun', value: 68 },
  ];

  readonly pieData: ChartDataPoint[] = [
    { label: 'Desktop', value: 45 },
    { label: 'Mobile', value: 35 },
    { label: 'Tablet', value: 20 },
  ];

  readonly pieLegend = [
    { label: 'Desktop' },
    { label: 'Mobile' },
    { label: 'Tablet' },
  ];

  readonly monthlyData: ChartDataPoint[] = [
    { label: 'Jan', value: 4500 },
    { label: 'Feb', value: 5200 },
    { label: 'Mar', value: 4800 },
    { label: 'Apr', value: 6100 },
    { label: 'May', value: 5800 },
    { label: 'Jun', value: 7200 },
    { label: 'Jul', value: 6900 },
    { label: 'Aug', value: 7500 },
    { label: 'Sep', value: 8200 },
    { label: 'Oct', value: 7800 },
    { label: 'Nov', value: 8500 },
    { label: 'Dec', value: 9200 },
  ];

  readonly growthData: ChartDataPoint[] = [
    { label: 'Week 1', value: 1200 },
    { label: 'Week 2', value: 1350 },
    { label: 'Week 3', value: 1480 },
    { label: 'Week 4', value: 1620 },
    { label: 'Week 5', value: 1850 },
    { label: 'Week 6', value: 2100 },
    { label: 'Week 7', value: 2380 },
    { label: 'Week 8', value: 2650 },
    { label: 'Week 9', value: 2920 },
    { label: 'Week 10', value: 3200 },
    { label: 'Week 11', value: 3580 },
    { label: 'Week 12', value: 4100 },
  ];
}
