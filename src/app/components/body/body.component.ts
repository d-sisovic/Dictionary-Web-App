import { TitleComponent } from '../title/title.component';
import { StoreService } from '../../services/store.service';
import { SourceComponent } from '../source/source.component';
import { MeaningComponent } from '../meaning/meaning.component';
import { NoResultComponent } from '../no-result/no-result.component';
import { IFreeDictionaryResponse } from '../../ts/models/free-dictionary-response.model';
import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    TitleComponent,
    SourceComponent,
    MeaningComponent,
    NoResultComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {

  private readonly storeService = inject(StoreService);

  public keyword!: Signal<string>;
  public dictionaryData!: Signal<IFreeDictionaryResponse | null>;

  constructor() {}

  public ngOnInit(): void {
    this.keyword = this.storeService.getKeyword;
    this.dictionaryData = this.storeService.getFreeDictionaryResponse;
  }
}
