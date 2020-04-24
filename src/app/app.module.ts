
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
////////// Components //////////
import { AppComponent } from './app.component';
import { GeneralComponent } from './components/general/general.component';
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
    GeneralComponent,
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
