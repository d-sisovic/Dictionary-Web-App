import { SourceComponent } from './source.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('SourceComponent', () => {
  let component: SourceComponent;
  let fixture: ComponentFixture<SourceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SourceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SourceComponent);
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
