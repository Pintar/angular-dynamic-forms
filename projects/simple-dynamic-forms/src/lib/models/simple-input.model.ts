import { SimpleFormControl, SimpleControlOptions } from '../interfaces/simple-form-control.interface';
import { FormComponentType } from '../enums/form-component-type.enum';

export class SimpleInput<T> implements SimpleFormControl<T> {
  readonly componentType = FormComponentType.formControl;
  formData;

  constructor(public controlOptions: SimpleControlOptions<T>, public component: any) {}
}
