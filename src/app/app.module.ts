import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
/*
    services
*/ 
import { ForecastService } from './services/forecast.service';
import { serviceHandeling } from './services/service-handeling';
/*
    all components in application
*/ 
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
//homepage
import { HomePageComponent } from './home-page/home-page.component';
import { PresentComponent } from './home-page/present/present.component';
import { FutureTableComponent } from './home-page/future-table/future-table.component';
import { HistoryTableComponent } from './home-page/history-table/history-table.component';
//charts
import { ChartComponent } from './chart/chart.component';
import { HistoryChartComponent } from './chart/history-chart/history-chart.component';
import { FutureChartComponent } from './chart/future-chart/future-chart.component';
//calculator
import { CalcComponent } from './calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ChartComponent,
    CalcComponent,
    FooterComponent,
    PresentComponent,
    HistoryChartComponent,
    FutureChartComponent,
    FutureTableComponent,
    HistoryTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [ForecastService, serviceHandeling],
  bootstrap: [AppComponent]
})
export class AppModule { }
