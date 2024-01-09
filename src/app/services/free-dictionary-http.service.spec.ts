import { TestBed } from '@angular/core/testing';
import { FreeDictionaryHttpService } from './free-dictionary-http.service';

describe('FreeDictionaryHttpService', () => {
  let service: FreeDictionaryHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeDictionaryHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
