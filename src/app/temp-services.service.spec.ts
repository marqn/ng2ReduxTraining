import { TestBed, inject } from '@angular/core/testing';

import { TempServices } from './temp-services.service';

describe('TempServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempServices]
    });
  });

  it('should ...', inject([TempServices], (service: TempServices) => {
    expect(service).toBeTruthy();
  }));
});
