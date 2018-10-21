import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'sign-card',
  templateUrl: './sign-card.component.html',
  styleUrls: ['./sign-card.component.scss']
})
export class SignCardComponent implements OnInit {
  loginForm: FormGroup;
  isFront = false;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      });
  }

  handleClick() {
    this.isFront = !this.isFront;
    console.log(this.isFront);
  }

  onSubmit() {
    this.http.post('/api/auth/sing-card', this.loginForm.value)
      .subscribe(console.log);
  }
}
