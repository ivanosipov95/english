import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  createDictionary(dictionaryName: string): Observable<any> {
    return this.http.post('/api/lingualeo/word-set', {
      name: dictionaryName
    });
  }

  addWord(sourceWord, translatedWord): Observable<any> {
    return this.http.post('/api/lingualeo/add-word', {
      sourceWord,
      translatedWord
    });
  }
}
