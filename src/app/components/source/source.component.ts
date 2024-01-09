import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFreeDictionaryResponse } from '../../ts/models/free-dictionary-response.model';

@Component({
  selector: 'app-source',
  standalone: true,
  imports: [],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceComponent {

  @Input({ required: true }) dictionaryData!: IFreeDictionaryResponse;
}
