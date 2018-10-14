import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: Observable<any>;

  constructor(private http: HttpClient) {
  }


  public auth() {
    const url = '/api/auth/login';

    const user = {
      email: 'test',
      password: 'test'
    };

    this.data = this.http.post(url, user);
  }
}
