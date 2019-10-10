import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDatepickerComponent } from './bootstrap-datepicker.component';
import { ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleFormControl } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-control.interface';

describe('BootstrapDatepickerComponent', () => {
  let component: BootstrapDatepickerComponent;
  let fixture: ComponentFixture<BootstrapDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NgbDatepickerModule],
      declarations: [BootstrapDatepickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDatepickerComponent);
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
