import { NgModule } from '@angular/core';
import { NgMessageboxComponent } from './ng-messagebox.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    NgMessageboxComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NgMessageboxComponent
  ]
})
export class NgMessageboxModule { }
