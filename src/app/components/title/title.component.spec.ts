import { TitleComponent } from './title.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TitleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    component.dictionaryData = {
      license: { name: "Test license", url: "license on url" },
      word: "Apple",
      sourceUrls: [],
      phonetics: [],
      meanings: []
    };

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
