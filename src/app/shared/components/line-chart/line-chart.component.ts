import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() data: ChartDataSets[] = [];
  @Input() country: string;

  covidCasesEvol: ChartDataSets[];
  lineChartColors: Color[];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions;

  ngOnInit(): void {
    this.createCovidCasesEvol();
    this.createLineChartLabels();
    this.createLineChartColors();
    this.createLineChartOptions();
  }

  ngOnChanges(): void {
    if (this.data !== undefined) {
      this.covidCasesEvol[0].data = [];
      this.data.forEach((monthData: any) => {
        this.covidCasesEvol[0].data.push(monthData.Active);
      });
    }
  }

  createCovidCasesEvol(): void {
    this.covidCasesEvol = [
      { data: [], label: 'Active Cases' }
    ];
  }

  createLineChartLabels(): void {
    this.lineChartLabels = ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
  }

  createLineChartColors(): void {
    this.lineChartColors = [
      {
        borderColor: '#29FBA9',
        backgroundColor: 'rgba(214,37,152)',
      },
    ]
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
            suggestedMax: 5000
          }
        }],
      },
      legend: {
        display: false,
        labels: {
          fontColor: "white",
          fontSize: 16
        }
      },
    };
  }

}
