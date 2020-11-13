import { Country } from '../../models/country';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ApiCountreisService } from '../../services/api-countreis.service';
import { ApiCovidService } from '../../services/api-covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // ng g c modal --skipTests

  paises: Country[];
  activePage: number;

  private itemsPage: number;
  private totalItems: number;
  private maxPage: number;

  constructor(
    private apiCountreis: ApiCountreisService,
    private dialog: MatDialog,
    private apiCovid: ApiCovidService
  ) { }

  ngOnInit(): void {
    this.apiCountreis.getAll().subscribe((res: Country[]) => {
      this.itemsPage = 20;
      this.activePage = 1;
      this.paises = res;
      this.totalItems = this.paises.length;
      this.maxPage = Math.round(this.totalItems / this.itemsPage);
    });
  }

  viewDetails(code: string) {
    this.apiCountreis.getByCode(code).then(cauntry => {
      this.apiCovid.getCauntry(cauntry.name).subscribe(res => {
        // console.log(res);
        let deaths: number = res[res.length - 1].Deaths;
        let recovered: number = res[res.length - 1].Recovered;
        this.openDialog(cauntry, deaths, recovered);
      });
    });
  }

  openDialog(country: Country, deaths: number, recovered: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      height: 'auto',
      data: { country: country, deaths, recovered }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getNumPage(): number[] {
    let retorno: number[] = [];
    for (let i = 1; i <= this.maxPage; i++) {
      retorno.push(i);
    }
    return retorno;
  }

  changePage(page: number) { this.activePage = page; }

  getPage() { return this.paises.slice(this.activePage - 1, this.activePage + this.itemsPage - 1); }

  next() { if (this.activePage != this.maxPage) this.activePage += this.itemsPage; }

  previous() { if (this.activePage != 1) this.activePage -= this.itemsPage; }

}
