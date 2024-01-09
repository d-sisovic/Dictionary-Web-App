import { FormsModule } from '@angular/forms';
import { DOCUMENT, NgClass } from '@angular/common';
import { StoreService } from '../../../services/store.service';
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitcherComponent {

  private readonly storeService = inject(StoreService);

  public checkboxState = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) { }

  public onChange(isDarkTheme: boolean): void {
    this.storeService.setTheme(isDarkTheme);

    this.document.querySelector('body')?.setAttribute('data-theme', `${isDarkTheme}`);
  }
}
