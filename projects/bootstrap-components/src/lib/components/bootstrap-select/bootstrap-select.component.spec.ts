import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSelectComponent } from './bootstrap-select.component';
import { ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';

describe('BootstrapSelectComponent', () => {
  let component: BootstrapSelectComponent;
  let fixture: ComponentFixture<BootstrapSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapSelectComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSelectComponent);
    component = fixture.componentInstance;

    const control = new FormControl('');
    const group = new FormBuilder().group({});

    component.formData = {
      formControl: control,
      formGroup: group,
      item: null
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
