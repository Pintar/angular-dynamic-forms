import { TestBed } from '@angular/core/testing';

import { SimpleFormsService } from './simple-forms.service';

describe('SimpleFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleFormsService = TestBed.get(SimpleFormsService);
    expect(service).toBeTruthy();
  });
});
