import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartOptions } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() totalDeaths: any;
  @Input() totalRecovered: any;

  pieChartLabels: Label[] = ['Deaths', 'Recovered'];
  covidTotals: SingleDataSet = [40, 30];
  pieChartType: string;
  options: ChartOptions;
  chart: Chart;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  ngOnChanges(): void {

  }

  public pieChartColors: Array<any> = [
    {
      backgroundColor: '#FD5E4F',
      borderColor: '#FD5E4F',
    },
    {
      backgroundColor: 'yellow',
      borderColor: 'rgba(106,90,205,1)',
    },
  ];

  createChart(): void {
    this.chart = new Chart('chart', {
      type: 'pie',
      data: {
        labels: ['Death', 'Recovered'],
        datasets: [{
          label: 'Recovered Vs Deaths',
          data: [this.totalDeaths, this.totalRecovered],
          backgroundColor: ['#fd4e4e', '#4ea6fd'],
          borderColor: ['black', 'black'],
          borderWidth: 1,
        }],
      },
    });
  }




}