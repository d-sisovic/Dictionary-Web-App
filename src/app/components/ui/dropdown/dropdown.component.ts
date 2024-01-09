import { NgClass } from '@angular/common';
import { ILabelValue } from '../../../ts/models/label-value.model';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, inject } from '@angular/core';

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

  public onSelect(item: ILabelValue): void {
    this.selectEvent.emit(item);
  }
}
