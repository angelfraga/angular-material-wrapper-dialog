import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './../material.module';


import { DialogModule } from '../dialog/dialog.module';
import { AppComponent } from './app.component';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

@NgModule({
  imports:      [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    DialogModule,
    MaterialModule
  ],
  declarations: [ AppComponent, CustomDialogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
