import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { BidComponent } from './bid/bid.component';

import { BidService } from './bid.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResultComponent,
    BidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [BidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
