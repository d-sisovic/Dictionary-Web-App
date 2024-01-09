import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../../services/store.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

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

  public onChange(isDarkTheme: boolean): void {
    this.storeService.setTheme(isDarkTheme);
  }
}
