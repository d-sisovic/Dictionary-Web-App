import { TestBed } from '@angular/core/testing';
import { FreeDictionaryHttpService } from './free-dictionary-http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FreeDictionaryHttpService', () => {
  let service: FreeDictionaryHttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(FreeDictionaryHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
