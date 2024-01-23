import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InputComponent } from './input.component';
import { FormControl, FormGroup } from '@angular/forms';
import { createTrimWhitespaceValidator } from '../../../utils/utils';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('InputComponent', () => {
  let element: DebugElement;
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        InputComponent,
        HttpClientTestingModule
      ],
      providers: []
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;

    component.inputForm = new FormGroup({
      keyword: new FormControl('', [createTrimWhitespaceValidator()])
    });

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error if input field have empty value and it\'s touched', () => {
    const inputElement = element.query(By.css('.input'));

    inputElement.triggerEventHandler('input', { target: { value: 'test' } });
    component.getKeywordControl.setValue('test');

    fixture.detectChanges();

    expect(inputElement.nativeElement.value).toBe('test');

    inputElement.triggerEventHandler('input', { target: { value: '' } });
    component.getKeywordControl.setValue('');

    fixture.detectChanges();

    expect(inputElement.nativeElement.value).toBe('');

    const errorElement = element.query(By.css('.error'));

    expect(errorElement).toBeTruthy();
  });
});
