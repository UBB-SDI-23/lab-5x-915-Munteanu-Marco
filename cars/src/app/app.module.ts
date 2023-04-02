import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestapiComponent } from './testapi/testapi.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarEndpointComponent } from './car-endpoint/car-endpoint.component';
import { HttpClientModule } from '@angular/common/http';
import { CarCardComponent } from './car-endpoint/car-card/car-card.component';
import { ReportCardComponent } from './car-endpoint/report-card/report-card.component';
import { UpdateFormComponent } from './car-endpoint/update-form/update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestapiComponent,
    WelcomeComponent,
    CarEndpointComponent,
    CarCardComponent,
    ReportCardComponent,
    UpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
