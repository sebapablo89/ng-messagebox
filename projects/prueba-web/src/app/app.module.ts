import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMessageboxModule } from 'ng-messagebox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMessageboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
