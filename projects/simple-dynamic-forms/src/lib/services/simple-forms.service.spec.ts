import { TestBed } from '@angular/core/testing';

import { SimpleFormsService } from './simple-forms.service';
import { FormBuilder } from '@angular/forms';

describe('SimpleFormsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: FormBuilder, useValue: new FormBuilder() }]
    })
  );

  it('should be created', () => {
    const service: SimpleFormsService = TestBed.get(SimpleFormsService);
    expect(service).toBeTruthy();
  });
});
