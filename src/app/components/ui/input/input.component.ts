import { NgClass } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { createTrimWhitespaceValidator } from '../../../utils/utils';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
        debounceTime(250),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(console.log);
  }

  public get getKeywordControl(): FormControl {
    return this.inputForm.controls['keyword'] as FormControl;
  }
}
