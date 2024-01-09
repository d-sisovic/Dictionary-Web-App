import { DOCUMENT, NgClass } from '@angular/common';
import { ILabelValue } from '../../../ts/models/label-value.model';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output, inject } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    if (this.firstClick) {
      this.firstClick = false;
      return;
    }

    if (this.elementRef.nativeElement.contains(event.target)) { return; }

    this.closeDropdownEvent.emit();
  }

  @Output() selectEvent = new EventEmitter();
  @Output() closeDropdownEvent = new EventEmitter();

  @Input({ required: true }) items!: ILabelValue[];

  private firstClick: boolean = true;

  private elementRef = inject(ElementRef);

  constructor(@Inject(DOCUMENT) private readonly document: Document) { }

  public onSelect(item: ILabelValue): void {
    this.document.documentElement.style.setProperty('--font-family', this.getCorrectFontFamily(item.value));

    this.selectEvent.emit(item);
  }

  private getCorrectFontFamily(value: string): string {
    switch (value) {
      case 'Sans Serif':
        return "Inter-Regular";
      case 'Serif':
        return "Lora-Regular";
      case 'Mono':
        return "Inconsolata-Regular";
      default:
        return "Inter-Regular";
    }
  }
}
