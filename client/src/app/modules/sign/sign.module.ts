import {NgModule} from '@angular/core';
import {SignCardComponent, SignInComponent} from './containers';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SignCardComponent,
    SignInComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    SignCardComponent
  ]
})
export class SignModule { }
