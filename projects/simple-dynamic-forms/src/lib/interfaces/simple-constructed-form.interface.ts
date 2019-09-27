import { FormGroup, FormControl } from '@angular/forms';
import { SimpleFormControl } from './simple-form-control.interface';
import { SimpleFormArray } from './simple-form-array.interface';
import { SimpleFormGroup } from './simple-form-group.interface';

export interface SimpleConstructedForm {
  formGroup: FormGroup;
  item: SimpleFormControl<any> | SimpleFormArray | SimpleFormGroup;
  formControl: FormControl;
}
