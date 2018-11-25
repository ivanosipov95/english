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

  getWord(sourceWord, dictionaryId): Observable<any> {
    return this.http.post('/api/lingualeo/get-word', {
      sourceWord,
      dictionaryId
    });
  }

  addWord(sourceWord, translatedWord, wordId, dictionaryId): Observable<any> {
    return this.http.post('/api/lingualeo/add-word', {
      sourceWord,
      translatedWord,
      wordId,
      dictionaryId
    });
  }
}
