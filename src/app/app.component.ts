import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  count = 0;

  constructor() {
    setTimeout(() => {
      this.count = 5;
    }, 100);
  }

  public change(test): void {
    console.log(test);
  }
}

