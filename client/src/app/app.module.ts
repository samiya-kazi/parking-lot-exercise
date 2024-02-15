import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLogFormComponent } from './components/add-log-form/add-log-form.component';
import { SlotCardComponent } from './components/slot-card/slot-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckOutModalComponent } from './components/check-out-modal/check-out-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLogFormComponent,
    SlotCardComponent,
    CheckOutModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
