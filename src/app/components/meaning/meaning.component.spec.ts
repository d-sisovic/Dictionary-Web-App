import { MeaningComponent } from './meaning.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('MeaningComponent', () => {
  let component: MeaningComponent;
  let fixture: ComponentFixture<MeaningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MeaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeaningComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    component.meaning = {
      partOfSpeech: "",
      synonyms: [],
      antonyms: [],
      definitions: []
    };

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
