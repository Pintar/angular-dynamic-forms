import { Component, OnInit } from '@angular/core';
import { SimpleBaseComponent } from 'projects/simple-dynamic-forms/src/lib/helpers/simple-base-component.helper';
import { SimpleFormControl } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-control.interface';

@Component({
  selector: 'lib-bootstrap-input',
  templateUrl: './bootstrap-input.component.html'
})
export class BootstrapInputComponent extends SimpleBaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  get constructedForm() {
    return this.formData;
  }

  get errorMessages() {
    return (this.simpleFormItem.item as SimpleFormControl<any>).controlOptions.errors;
  }
}
