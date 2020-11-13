import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() totalDeaths: any;
  @Input() totalRecovered: any;
  @Input() totalActive: any;

  pieChartLabels: Label[] = ['Deaths', 'Recovered', 'Active'];
  chart: Chart;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = new Chart('chart', {
      type: 'pie',
      data: {
        labels: ['Death', 'Recovered', 'Active'],
        datasets: [{
          data: [this.totalDeaths, this.totalRecovered, this.totalActive],
          backgroundColor: ['#fd4e4e', '#4ea6fd', 'orange'],
          borderColor: ['black', 'black', 'black'],
          borderWidth: 1,
        }]
      },
    });
  }




}