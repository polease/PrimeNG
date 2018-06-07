import { AppRoutes } from './app.route';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import {MenuItem} from 'primeng/api'
import {StoreModule} from '@ngrx/store'
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu'
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown'
import {DialogModule} from 'primeng/dialog';

import { AppComponent } from './app.component';
import { StaffTypeTableComponent } from './staff-type-table/staff-type-table.component';
import { StaffTypeEditComponent } from './staff-type-edit/staff-type-edit.component';
import { staffTypeReducer } from 'src/app/store/staff-type.reducer';


@NgModule({
  declarations: [
    AppComponent,
    StaffTypeTableComponent,
    StaffTypeEditComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    RouterModule, 
    FormsModule,
    BrowserAnimationsModule,
    AppRoutes,
    TableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    StoreModule.forRoot({staff:staffTypeReducer})
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
