import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './shared/components/home/home.component';
import { MaterialModule } from './material.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ChartsModule } from 'ng2-charts';
import { ApiCountreisService } from './shared/services/api-countreis.service';
import { PieChartComponent } from './shared/components/pie-chart/pie-chart.component';
import { LineChartComponent } from './shared/components/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    PieChartComponent,
    LineChartComponent,
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
    ApiCountreisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
