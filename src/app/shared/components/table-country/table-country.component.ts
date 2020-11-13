import { ApiCovidService } from './../../services/api-covid.service';
import { ApiCountreisService } from './../../services/api-countreis.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Country } from '../../models/country';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: ['./table-country.component.scss']
})
export class TableCountryComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [];
  dataSource;

  columnNames = [
    {
      id: 'name',
      value: 'Name'
    },
    {
      id: 'nativeName',
      value: 'Native Name',
    },
    {
      id: 'region',
      value: 'Region',
    },
    {
      id: 'capital',
      value: 'Capital',
    }];

  constructor(
    private apiCountry: ApiCountreisService,
    private apiCovid: ApiCovidService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.apiCountry.getAll().subscribe(res => {
      this.dataSource = this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewDetails(code: string) {
    this.apiCountry.getByCode(code).then(cauntry => {
      this.apiCovid.getCauntry(cauntry.name).subscribe(res => {
        let chartData: ChartDataSets[] = [
          { data: [], label: 'Active', borderColor: 'blue', backgroundColor: 'transparent' },
          { data: [], label: 'Deaths', borderColor: 'red', backgroundColor: 'transparent' },
          { data: [], label: 'Recovered', borderColor: 'orange', backgroundColor: 'transparent' },
        ];
        res.forEach(element => {
          chartData[0].data.push(element.Active);
          chartData[1].data.push(element.Deaths);
          chartData[2].data.push(element.Recovered);
        });
        this.openDialog(cauntry, chartData);
      });
    });
  }

  openDialog(country: Country, chartData: ChartDataSets[]): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      height: 'auto',
      data: { country: country, chartData }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
