import { StoreService } from '../../services/store.service';
import { IFreeDictionaryResponse } from '../../ts/models/free-dictionary-response.model';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Signal, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {

  @Input({ required: true }) dictionaryData!: IFreeDictionaryResponse;

  @ViewChild('audioElement') audioElement!: ElementRef;

  public audioUrl!: Signal<string>;

  private readonly storeService = inject(StoreService);

  public ngOnInit(): void {
    this.audioUrl = this.storeService.getFreeDictionaryAudioUrl;
  }

  public onPlayAudio(audioUrl: string): void {
    this.audioElement.nativeElement.src = audioUrl;
    this.audioElement.nativeElement.play();
  }
}
