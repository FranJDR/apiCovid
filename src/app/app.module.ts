import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ChartsModule } from 'ng2-charts';
import { ApiCountreisService } from './shared/services/api-countreis.service';
import { ApiCovidService } from './shared/services/api-covid.service';
import { PieChartComponent } from './shared/components/chart/pie-chart/pie-chart.component';
import { LineChartComponent } from './shared/components/chart/line-chart/line-chart.component';
import { ModalRegionComponent } from './shared/components/modal-region/modal-region.component';
import { TableCountryComponent } from './shared/components/table-country/table-country.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PieChartComponent,
    LineChartComponent,
    ModalRegionComponent,
    TableCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [
    ApiCountreisService,
    ApiCovidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
