import { Component, OnInit } from '@angular/core';
import { SimpleComponentProperties } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-component-properties.interface';
import { SimpleConstructedForm } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-constructed-form.interface';
import { SimpleFormItem } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-item.interface';
import { SimpleFormControl } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-control.interface';

@Component({
  selector: 'lib-bootstrap-input',
  templateUrl: './bootstrap-input.component.html'
})
export class BootstrapInputComponent implements OnInit, SimpleComponentProperties {
  formData: SimpleConstructedForm;
  simpleFormItem: SimpleFormItem;

  constructor() {}

  ngOnInit() {}

  get formControlName() {
    return (this.simpleFormItem.item as SimpleFormControl<any>).controlOptions.property;
  }
  get form() {
    return this.formData.formGroup;
  }
}
