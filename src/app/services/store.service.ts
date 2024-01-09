import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { IFreeDictionaryResponse } from '../ts/models/free-dictionary-response.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private readonly keyword: WritableSignal<string> = signal('');
  private readonly darkTheme: WritableSignal<boolean> = signal(false);
  private readonly freeDictionaryResponse: WritableSignal<IFreeDictionaryResponse | null> = signal(null);

  constructor() { }

  public setKeyword(keyword: string): void {
    this.keyword.set(keyword);
  }

  public setTheme(isDarkTheme: boolean): void {
    this.darkTheme.set(isDarkTheme);
  }

  public setFreeDictionaryResponse(freeDictionaryResponse: IFreeDictionaryResponse | null): void {
    this.freeDictionaryResponse.set(freeDictionaryResponse);
  }

  public get getKeyword(): Signal<string> {
    return this.keyword;
  }

  public get getFreeDictionaryResponse(): Signal<IFreeDictionaryResponse | null> {
    return this.freeDictionaryResponse;
  }

  public get getFreeDictionaryAudioUrl(): Signal<string> {
    return computed(() => this.getFreeDictionaryResponse()?.phonetics.find(item => item.audio)?.audio || '');
  }

  public get getTheme(): Signal<boolean> {
    return this.darkTheme;
  }
}
