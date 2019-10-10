import { SimpleFormError } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-error.interface';
import { TemplateRef } from '@angular/core';
import { SimpleConstructedForm } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-constructed-form.interface';
import { FormControl } from '@angular/forms';

export interface ComponentCommonInput {
  labelText?: string;
  formControl: FormControl;
  formControlName: string;
  constructedForm: SimpleConstructedForm;
  template?: TemplateRef<any>;
  errorMessages: SimpleFormError[];
}
