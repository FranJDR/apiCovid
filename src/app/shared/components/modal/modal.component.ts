import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from '../../models/country';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getTotalDeaths() {
    return this.data.chartData[1].data[this.data.chartData[1].data.length - 1];
  }

  getTotalRecovered() {
    return this.data.chartData[2].data[this.data.chartData[2].data.length - 1];
  }

  getTotalActive() {
    return this.data.chartData[0].data[this.data.chartData[0].data.length - 1];
  }

}
