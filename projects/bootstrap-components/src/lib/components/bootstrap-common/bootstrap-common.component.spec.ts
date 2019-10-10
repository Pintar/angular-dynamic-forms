import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCommonComponent } from './bootstrap-common.component';
import { MockComponent } from 'ng-mocks';
import { SimpleFormLabelComponent } from 'projects/simple-dynamic-forms/src/lib/components/simple-form-label/simple-form-label.component';
import { SimpleFormErrorComponent } from 'projects/simple-dynamic-forms/src/lib/components/simple-form-error/simple-form-error.component';
import { ComponentCommonInput } from '../../interfaces/component-common-input.interface';

describe('BootstrapCommonComponent', () => {
  let component: BootstrapCommonComponent;
  let fixture: ComponentFixture<BootstrapCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BootstrapCommonComponent,
        MockComponent(SimpleFormLabelComponent),
        MockComponent(SimpleFormErrorComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCommonComponent);
    component = fixture.componentInstance;
    component.data = {} as ComponentCommonInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
