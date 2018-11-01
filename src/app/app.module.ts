import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {SignModule} from './modules/sign/sign.module';
import { TestDirective } from './test.directive';
import { ConfirmByEnterDirective } from './confirm-by-enter.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    ConfirmByEnterDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
