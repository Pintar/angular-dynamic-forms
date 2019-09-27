import { SimpleFormControl } from './simple-form-control.interface';
import { SimpleFormArray } from './simple-form-array.interface';
import { SimpleFormGroup } from './simple-form-group.interface';

// import { SimpleFormComponent } from './simple-form-component.interfaces';

export interface SimpleFormItem {
  item: SimpleFormControl<any> | SimpleFormArray | SimpleFormGroup;
  children?: SimpleFormItem[];
}
