import { StoreService } from './store.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { IFreeDictionaryResponse } from '../ts/models/free-dictionary-response.model';
import { IFreeDictionaryErrorResponse } from '../ts/models/free-dictionary-error-response.model';

@Injectable({
  providedIn: 'root'
})
export class FreeDictionaryHttpService {

  private readonly http = inject(HttpClient);
  private readonly storeService = inject(StoreService);

  public readonly freeDictionaryApiUrl: string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor() { }

  public fetchKeywordDictionary$(keyword: string): Observable<IFreeDictionaryResponse[] | IFreeDictionaryErrorResponse | null> {
    return this.http.get<IFreeDictionaryResponse[] | IFreeDictionaryErrorResponse>(this.freeDictionaryApiUrl + keyword)
      .pipe(
        tap(response => this.storeService.setFreeDictionaryResponse(this.getResponseToSet(response))),
        catchError(() => {
          this.storeService.setFreeDictionaryResponse(null);

          return of(null);
        })
      );
  }

  private getResponseToSet(response: IFreeDictionaryErrorResponse | IFreeDictionaryResponse[]): IFreeDictionaryResponse | null {
    if (response.hasOwnProperty('message')) { return null; }

    const [firstItem] = response as IFreeDictionaryResponse[];

    return firstItem;
  }
}
