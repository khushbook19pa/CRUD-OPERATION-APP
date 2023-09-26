import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './pages/form/form.component';
import { CardsComponent } from './pages/cards/cards.component';
import { TableComponent } from './pages/table/table.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [AppComponent, FormComponent, CardsComponent, TableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    AppRoutingModule,
    MatPaginatorModule,
    CdkTableModule,
    MatSortModule,
    MatBottomSheetModule,
    TabsModule.forRoot(),
  ],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
