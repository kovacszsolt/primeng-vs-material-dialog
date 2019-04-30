import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimeComponent } from './prime/prime.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MaterialComponent } from './material/material.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatIconModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { DateHuAdapter } from './date.hu.adapter';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompComponent } from './material/autocomp/autocomp.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeComponent,
    MaterialComponent,
    AutocompComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    OverlayPanelModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule, MatNativeDateModule, MatIconModule, FormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  entryComponents: [
    MaterialComponent,
    AutocompComponent
  ],
  providers: [
    {provide: DateAdapter, useClass: DateHuAdapter},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
