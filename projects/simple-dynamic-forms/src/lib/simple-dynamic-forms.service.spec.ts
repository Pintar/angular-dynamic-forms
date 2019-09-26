import { TestBed } from '@angular/core/testing';

import { SimpleDynamicFormsService } from './simple-dynamic-forms.service';

describe('SimpleDynamicFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleDynamicFormsService = TestBed.get(SimpleDynamicFormsService);
    expect(service).toBeTruthy();
  });
});
