import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DropdownComponent } from './dropdown.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('DropdownComponent', () => {
  let element: DebugElement;
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DropdownComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render passed number of items', () => {
    component.items = [
      { label: 'Angular', value: 'Angular' },
      { label: 'React', value: 'React' },
      { label: 'Vue', value: 'Vue' }
    ];

    fixture.detectChanges();

    const dropdownItems = element.queryAll(By.css('.container__item'));

    expect(dropdownItems.length).toBe(3);
  });
});
