import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BootstrapTextareaComponent } from './bootstrap-textarea.component';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SimpleFormControl } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-control.interface';
import { BootstrapCommonComponent } from '../bootstrap-common/bootstrap-common.component';
import { MockComponent } from 'ng-mocks';

describe('BootstrapTextareaComponent', () => {
  let component: BootstrapTextareaComponent;
  let fixture: ComponentFixture<BootstrapTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BootstrapTextareaComponent, MockComponent(BootstrapCommonComponent)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTextareaComponent);
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
