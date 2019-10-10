import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCheckboxComponent } from './bootstrap-checkbox.component';
import { FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SimpleFormControl } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-control.interface';

describe('BootstrapCheckboxComponent', () => {
  let component: BootstrapCheckboxComponent;
  let fixture: ComponentFixture<BootstrapCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BootstrapCheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCheckboxComponent);
    component = fixture.componentInstance;
    const control = new FormControl('');
    const group = new FormBuilder().group({ demo: control });

    component.formData = {
      formControl: control,
      formGroup: group,
      item: null
    };

    component.simpleFormItem = {
      item: {
        controlOptions: { property: 'demo' },
        component: null
      } as SimpleFormControl<any>
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
