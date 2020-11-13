import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() data: ChartDataSets[];
  @Input() country: string;

  covidCasesEvol: ChartDataSets[];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions;

  ngOnInit(): void {
    this.createLineChartLabels();
    this.createLineChartOptions();
    console.log(this.data);
  }

  ngOnChanges(): void {
    if (this.data !== undefined) {
      this.covidCasesEvol = this.data;
      console.log(this.covidCasesEvol);
    }
  }

  createLineChartLabels(): void {
    this.lineChartLabels = ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];
  }

  createLineChartOptions(): void {
    this.lineChartOptions = {
      responsive: true,
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            display: true,
            beginAtZero: true,
            suggestedMax: 5000,
            fontColor: 'black',
            fontSize: 16
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: 'black',
            fontSize: 16
          }
        }]
      },
      legend: {
        display: false,
        labels: {
          fontColor: "black",
          fontSize: 16
        }
      },
    };
  }

}
