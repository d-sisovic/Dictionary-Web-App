import { NgClass } from '@angular/common';
import { StoreService } from '../../../services/store.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { createTrimWhitespaceValidator } from '../../../utils/utils';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FreeDictionaryHttpService } from '../../../services/free-dictionary-http.service';
import { ChangeDetectionStrategy, Component, DestroyRef, Input, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {

  @Input() placeholder: string = '';

  private readonly destroyRef = inject(DestroyRef);
  private readonly formBuilder = inject(FormBuilder);
  private readonly storeService = inject(StoreService);
  private readonly freeDictionaryHttpService = inject(FreeDictionaryHttpService);

  public inputForm!: FormGroup;

  public ngOnInit(): void {
    this.buildForm();
    this.watchFormChanges();
  }

  private buildForm(): void {
    this.inputForm = this.formBuilder.group({ keyword: ['', [createTrimWhitespaceValidator()]] });
  }

  private watchFormChanges(): void {
    this.getKeywordControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        switchMap(keyword => this.freeDictionaryHttpService.fetchKeywordDictionary$(keyword)),
        tap(() => this.storeService.setKeyword(this.getKeywordControl.value)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public get getKeywordControl(): FormControl {
    return this.inputForm.controls['keyword'] as FormControl;
  }
}
