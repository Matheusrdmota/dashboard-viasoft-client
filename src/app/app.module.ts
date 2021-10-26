import { DataPipe } from './pipes/data.pipe'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartModule } from 'primeng/chart';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TableComponent,
    FilterTableComponent,
    DataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    ChartModule,
    MenubarModule,
    HttpClientModule,
    CardModule,
    TableModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
