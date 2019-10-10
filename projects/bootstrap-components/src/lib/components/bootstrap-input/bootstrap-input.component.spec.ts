import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapInputComponent } from './bootstrap-input.component';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MockComponent } from 'ng-mocks';
import { SimpleFormLabelComponent } from 'projects/simple-dynamic-forms/src/lib/components/simple-form-label/simple-form-label.component';
import { SimpleFormErrorComponent } from 'projects/simple-dynamic-forms/src/lib/components/simple-form-error/simple-form-error.component';
import { SimpleFormControl } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-control.interface';
import { BootstrapCommonComponent } from '../bootstrap-common/bootstrap-common.component';

describe('BootstrapInputComponent', () => {
  let component: BootstrapInputComponent;
  let fixture: ComponentFixture<BootstrapInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BootstrapInputComponent, MockComponent(BootstrapCommonComponent)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapInputComponent);
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
