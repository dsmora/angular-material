import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatRadioModule, MatSliderModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { DataPickerComponent } from './data-picker/data-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DataPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
