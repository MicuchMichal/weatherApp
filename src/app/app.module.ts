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
/*
    all components in application
*/ 
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
//homepage
import { HomePageComponent } from './home-page/home-page.component';
import { PresentComponent } from './home-page/present/present.component';
import { HistoryComponent } from './home-page/history/history.component';
import { FutureComponent } from './home-page/future/future.component';
//charts
import { ChartComponent } from './chart/chart.component';
import { HistoryChartComponent } from './chart/history-chart/history-chart.component';
import { FutureChartComponent } from './chart/future-chart/future-chart.component';
//calculator
import { CalcComponent } from './calc/calc.component';
/*
    services
*/ 
import { ForecastService } from './services/forecast.service';
import { chartHandeling } from './services/chart-handeling';
import { serviceHandeling } from './services/service-handeling';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ChartComponent,
    CalcComponent,
    FooterComponent,
    HistoryComponent,
    FutureComponent,
    PresentComponent,
    HistoryChartComponent,
    FutureChartComponent,
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
    MatInputModule
  ],
  providers: [ForecastService, serviceHandeling, chartHandeling],
  bootstrap: [AppComponent]
})
export class AppModule { }
