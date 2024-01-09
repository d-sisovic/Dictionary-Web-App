import { ILabelValue } from '../../ts/models/label-value.model';
import { SelectComponent } from '../ui/select/select.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../ui/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SelectComponent,
    ThemeSwitcherComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  public items: ILabelValue[] = [
    { label: 'Sans Serif', value: 'Sans Serif' },
    { label: 'Serif', value: 'Serif' },
    { label: 'Mono', value: 'Mono' }
  ];
}
