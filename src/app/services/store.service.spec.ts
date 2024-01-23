import { StoreService } from './store.service';
import { TestBed } from '@angular/core/testing';
import { mockResponse } from '../utils/test-utils';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set value to keyword signal/return set value', () => {
    service.setKeyword("apple");

    expect(service.getKeyword()).toBe("apple");
  });

  it('should return audio from getFreeDictionaryAudioUrl, if response is set to signal', () => {
    service.setFreeDictionaryResponse(mockResponse);

    expect(service.getFreeDictionaryAudioUrl()).toBe("https://api.dictionaryapi.dev/media/pronunciations/en/apple-uk.mp3");
  });
});
