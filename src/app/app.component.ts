import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dictionaryName: string = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear();

  sourceWord: string;
  translatedWord: string;
  dictionaryId: number;

  isWordAddedSuccessfully = false;

  constructor(private appService: AppService) {
  }

  createDictionary(): void {
    this.appService.createDictionary(this.dictionaryName).subscribe(data => {
      this.dictionaryId = data.id;
    });
  }

  addWord(): void {
    this.appService.addWord(this.sourceWord, this.translatedWord)
      .subscribe(data => {
        this.isWordAddedSuccessfully = true;

        setTimeout(() => this.isWordAddedSuccessfully = false, 3000);
      });
  }
}

