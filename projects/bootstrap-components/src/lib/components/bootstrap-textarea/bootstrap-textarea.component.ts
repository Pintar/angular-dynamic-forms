import { Component, OnInit } from '@angular/core';
import { SimpleBaseComponent } from 'projects/simple-dynamic-forms/src/lib/helpers/simple-base-component.helper';
import { ComponentCommonInput } from '../../interfaces/component-common-input.interface';
import { CommonInputMethods } from '../../interfaces/common-input-methods.interface';

@Component({
  selector: 'lib-bootstrap-textarea',
  templateUrl: './bootstrap-textarea.component.html'
})
export class BootstrapTextareaComponent extends SimpleBaseComponent implements OnInit, CommonInputMethods {
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
