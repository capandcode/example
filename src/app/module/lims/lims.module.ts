import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LimsRoutingModule } from './lims-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BlockprocessingComponent } from './components/blockprocessing/blockprocessing.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlockprocessformComponent } from './components/blockprocessform/blockprocessform.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
// import { GridModule } from '@progress/kendo-angular-grid';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TableComponent } from './components/table/table.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BlockprocessingComponent,
    AdminComponent,
    BlockprocessformComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    LimsRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDatepickerModule,
    GridModule,
    PDFModule,
    ExcelModule,
    InputsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,MatTabsModule
  ],
})
export class LimsModule {}
