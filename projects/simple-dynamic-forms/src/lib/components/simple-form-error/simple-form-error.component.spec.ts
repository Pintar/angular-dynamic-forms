import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormErrorComponent } from './simple-form-error.component';
import { FormBuilder, FormControl } from '@angular/forms';

describe('SimpleFormErrorComponent', () => {
  let component: SimpleFormErrorComponent;
  let fixture: ComponentFixture<SimpleFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleFormErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormErrorComponent);
    component = fixture.componentInstance;
    const control = new FormControl('');
    const formGroup = new FormBuilder().group({ demo: control });
    component.constructedForm = {
      formControl: control,
      formGroup,
      item: null
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
