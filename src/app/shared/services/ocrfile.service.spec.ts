import { TestBed } from '@angular/core/testing';

import { OcrfileService } from './ocrfile.service';

describe('OcrfileService', () => {
  let service: OcrfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcrfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
