import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SelectComponent } from './select.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('SelectComponent', () => {
  let element: DebugElement;
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        SelectComponent,
        NoopAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have render first element from passed items', () => {
    component.items = [
      { label: 'Angular', value: 'Angular' },
      { label: 'React', value: 'React' },
      { label: 'Vue', value: 'Vue' }
    ];

    fixture.detectChanges();

    const selectableElement = element.query(By.css('.selectable'));

    expect(selectableElement.nativeElement.textContent.trim()).toBe('Angular');
  });
});
