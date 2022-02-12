import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProcessShipmentModalComponent } from './process-shipment-modal/process-shipment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessShipmentModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ProcessShipmentModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
