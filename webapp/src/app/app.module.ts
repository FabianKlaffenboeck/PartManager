import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {PropertySelectorComponent} from './data/property-selector/property-selector.component';
import {PartTableComponent} from './data/part-table/part-table.component';
import {RestApiService} from "./service/rest-api.service";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {PartDialogComponent} from './dialogues/part-dialog/part-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {ManufacturerDialogComponent} from "./dialogues/manufacturer-dialog/manufacturer-dialog.component";
import {PartTypeDialogComponent} from "./dialogues/partType-dialog/partType-dialog.component";
import {ShelfDialogComponent} from "./dialogues/shelf-dialog/shelf-dialog.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import { DataComponent } from './data/data.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertySelectorComponent,
    PartTableComponent,
    PartDialogComponent,
    ManufacturerDialogComponent,
    PartTypeDialogComponent,
    ShelfDialogComponent,
    ToolbarComponent,
    DataComponent,
    SettingsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatPaginatorModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterOutlet,
    NgOptimizedImage,
    NgxMatSelectSearchModule,
    RouterLink
  ],
  providers: [
    {provide: RestApiService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
