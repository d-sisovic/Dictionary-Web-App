import { NgClass } from '@angular/common';
import { ILabelValue } from '../../../ts/models/label-value.model';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    NgClass,
    DropdownComponent
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('rotateChevron', [
      state('open', style({
        transform: 'rotate(180deg)'
      })),
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
      transition('open <=> closed', animate('0.5s ease'))
    ])
  ]
})
export class SelectComponent implements OnInit {

  @Output() selectedEvent = new EventEmitter();

  @Input({ required: true }) items: ILabelValue[] = [];

  public showDropdown!: boolean;
  public selectedItem!: ILabelValue | null;

  public ngOnInit(): void {
    const [firstItem] = this.items;

    this.setSelectedItem(firstItem || null);
  }

  public onSelectItem(selectedItem: ILabelValue): void {
    this.onToggleDropdown();
    this.setSelectedItem(selectedItem);

    this.selectedEvent.emit(selectedItem);
  }

  public onToggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  private setSelectedItem(selectedItem: ILabelValue | null): void {
    this.selectedItem = selectedItem;
  }
}
