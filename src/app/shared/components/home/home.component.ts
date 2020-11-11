import { Countreis } from './../../models/countreis';
import { RestCountreisService } from './../../services/rest-countreis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paises: Countreis[];
  activePage: number;

  private itemsPage: number;
  private totalItems: number;
  private maxPage: number;

  constructor(
    private countreis: RestCountreisService
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

  getNumPage(): number[] {
    let retorno: number[] = [];
    for (let i = 1; i <= this.maxPage; i++) {
      retorno.push(i);
    }
    return retorno;
  }

  viewDetails(code: string) {
    this.countreis.getByCode(code).then(res => {
      console.log(res);
    });
  }

  changePage(page: number) { this.activePage = page; }

  getPage() { return this.paises.slice(this.activePage - 1, this.activePage + this.itemsPage - 1); }

  next() { if (this.activePage != this.maxPage) this.activePage++; }

  previous() { if (this.activePage != 1) this.activePage--; }
  
}
