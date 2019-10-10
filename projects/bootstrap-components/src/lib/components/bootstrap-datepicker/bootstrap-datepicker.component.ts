import { Component, OnInit } from '@angular/core';
import { SimpleBaseComponent } from 'projects/simple-dynamic-forms/src/lib/helpers/simple-base-component.helper';
import { CommonInputMethods } from '../../interfaces/common-input-methods.interface';
import { ComponentCommonInput } from '../../interfaces/component-common-input.interface';

@Component({
  selector: 'lib-bootstrap-datepicker',
  templateUrl: './bootstrap-datepicker.component.html'
})
export class BootstrapDatepickerComponent extends SimpleBaseComponent implements OnInit, CommonInputMethods {
  constructor() {
    super();
  }

  ngOnInit() {}

  get commonData(): ComponentCommonInput {
    return {
      constructedForm: this.formData,
      errorMessages: this.errorMessages,
      formControl: this.formControl,
      formControlName: this.formControlName,
      labelText: this.labelText,
      // TODO: implement this
      template: null
    };
  }
}
