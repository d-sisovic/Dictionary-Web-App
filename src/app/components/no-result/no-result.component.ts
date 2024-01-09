import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-result',
  standalone: true,
  imports: [],
  templateUrl: './no-result.component.html',
  styleUrl: './no-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoResultComponent {

}
