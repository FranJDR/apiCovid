import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableCountryComponent } from './shared/components/table-country/table-country.component';

const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'table', component: TableCountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
