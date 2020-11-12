import { Countreis } from './../../models/countreis';
import { RestCountreisService } from './../../services/rest-countreis.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // ng g c modal --skipTests

  paises: Countreis[];
  activePage: number;

  private itemsPage: number;
  private totalItems: number;
  private maxPage: number;

  constructor(
    private countreis: RestCountreisService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.countreis.getAll().subscribe((res: Countreis[]) => {
      this.itemsPage = 20;
      this.activePage = 1;
      this.paises = res;
      this.totalItems = this.paises.length;
      this.maxPage = Math.round(this.totalItems / this.itemsPage);
    });
  }

  viewDetails(code: string) {
    this.countreis.getByCode(code).then(res => {
      this.openDialog(res);
    });
  }

  openDialog(pais: Countreis): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '80%',
      height: '80%',
      data: { pias: pais }
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

  next() { if (this.activePage != this.maxPage) this.activePage++; }

  previous() { if (this.activePage != 1) this.activePage--; }

}
