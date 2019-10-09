import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { SimpleConstructedForm } from '../../interfaces/simple-constructed-form.interface';
import { SimpleFormError } from '../../interfaces/simple-form-error.interface';

@Component({
  selector: 'lib-simple-form-error',
  templateUrl: './simple-form-error.component.html'
})
export class SimpleFormErrorComponent implements OnInit {
  @Input() template: TemplateRef<any>;
  @Input() constructedForm: SimpleConstructedForm;
  @Input() errorMessages: SimpleFormError[] = [];

  constructor() {}

  ngOnInit() {}

  canShowErrors(): boolean {
    return this.constructedForm.formControl.dirty && !this.constructedForm.formControl.valid;
  }

  getErrorMessage(errorIndex: string) {
    return this.errorMessages[errorIndex];
  }

  get errors() {
    const errors = this.constructedForm.formControl.errors;
    return Object.keys(errors).map(key => {
      const match = this.errorMessages.filter(x => x.formErrorKey === key);
      if (!match) {
        throw new Error(`SimpleFormError: No match in error messages for key ${key}.`);
      }
      return match[0].formErrorDescription;
    });
  }
}
