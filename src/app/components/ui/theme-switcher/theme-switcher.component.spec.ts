import { NgClass } from '@angular/common';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('ThemeSwitcherComponent', () => {
  let element: DebugElement;
  let component: ThemeSwitcherComponent;
  let fixture: ComponentFixture<ThemeSwitcherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NgClass,
        ThemeSwitcherComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ThemeSwitcherComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update checkboxState when ngModel changes', () => {
    expect(component.checkboxState).toBe(false);

    const newCheckboxState = true;
    component.checkboxState = newCheckboxState;

    fixture.detectChanges();

    expect(component.checkboxState).toBe(newCheckboxState);
  });

  it('should have checked class if checkboxState = true', () => {
    const newCheckboxState = true;
    component.checkboxState = newCheckboxState;

    fixture.detectChanges();

    const spanElement = element.query(By.css('.switcher__circle'));

    expect(component.checkboxState).toBe(newCheckboxState);
    expect(spanElement.nativeElement.classList.contains('switcher__circle--checked')).toBe(true);
  });
});
