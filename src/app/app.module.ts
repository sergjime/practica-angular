
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
////////// Components //////////
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PushButtonComponent } from './components/push-button/push-button.component';
import { PulsationsComponent } from './components/pulsations/pulsations.component';
////////// Services //////////
import { PushButtonService } from './services/push-button.service';
import { OtroComponent } from './components/otro/otro.component';
import { ParameterComponent } from './components/parameter/parameter.component';

@NgModule({
  declarations: [
    AppComponent,
    PushButtonComponent,
    PulsationsComponent,
    HomeComponent,
    OtroComponent,
    ParameterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PushButtonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
