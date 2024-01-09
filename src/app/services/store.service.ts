import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private readonly darkTheme = signal(false);

  constructor() { }

  public setTheme(isDarkTheme: boolean): void {
    this.darkTheme.set(isDarkTheme);
  }

  public get getTheme(): Signal<boolean> {
    return this.darkTheme;
  }
}
