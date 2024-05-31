import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CryptoItemComponent } from './Components/crypto-item/crypto-item.component';
import {HttpClientModule} from '@angular/common/http';
import { CryptoService } from './Service/crypto.service';
import { compileDeclareClassMetadata } from '@angular/compiler';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CryptoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
