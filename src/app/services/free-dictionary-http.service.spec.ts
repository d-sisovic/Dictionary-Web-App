import { StoreService } from './store.service';
import { mockResponse } from '../utils/test-utils';
import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { FreeDictionaryHttpService } from './free-dictionary-http.service';
import { IFreeDictionaryResponse } from '../ts/models/free-dictionary-response.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FreeDictionaryHttpService', () => {
  let service: FreeDictionaryHttpService;
  let storeService: jest.Mocked<StoreService>;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    storeService = { "setFreeDictionaryResponse": jest.fn() } as unknown as jest.Mocked<StoreService>;

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: StoreService, useValue: storeService }
      ]
    });

    service = TestBed.inject(FreeDictionaryHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct response from fetchKeywordDictionary$ fn', fakeAsync(() => {
    service.fetchKeywordDictionary$("apple").subscribe(response => {
      expect(response).toBeTruthy();
      expect((response as IFreeDictionaryResponse[])[0].word).toBe('apple');
    });

    const request = httpTestingController.expectOne(service.freeDictionaryApiUrl + "apple");

    expect(request.request.method).toEqual("GET");

    request.flush([mockResponse]);

    flush();
  }));

  it('should return null in the case of an HTTP error', fakeAsync(() => {
    service.fetchKeywordDictionary$("apple").subscribe(response => {
      expect(response).toBeNull();
    });

    const request = httpTestingController.expectOne(service.freeDictionaryApiUrl + "apple");

    expect(request.request.method).toEqual("GET");

    request.flush('Request failed', { status: 500, statusText: 'Internal Server Error' });

    flush();
  }));
});
