import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFreeDictionaryMeaning } from '../../ts/models/free-dictionary-meaning.model';

@Component({
  selector: 'app-meaning',
  standalone: true,
  imports: [],
  templateUrl: './meaning.component.html',
  styleUrl: './meaning.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeaningComponent {

  @Input({ required: true }) meaning!: IFreeDictionaryMeaning;

}
