import { TestBed } from '@angular/core/testing';

import { JmgLibService } from './jmg-lib.service';

describe('JmgLibService', () => {
  let service: JmgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JmgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
