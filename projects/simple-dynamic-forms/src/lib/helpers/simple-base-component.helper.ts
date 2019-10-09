import { SimpleComponentProperties } from '../interfaces/simple-component-properties.interface';
import { SimpleConstructedForm } from '../interfaces/simple-constructed-form.interface';
import { SimpleFormItem } from '../interfaces/simple-form-item.interface';
import { SimpleFormControl } from '../interfaces/simple-form-control.interface';

export abstract class SimpleBaseComponent implements SimpleComponentProperties {
  formData: SimpleConstructedForm;
  simpleFormItem: SimpleFormItem;

  constructor() {}

  get labelText() {
    return (this.simpleFormItem.item as SimpleFormControl<any>).controlOptions.label;
  }

  get formControl() {
    return this.formData.formControl;
  }

  get formControlName() {
    return (this.simpleFormItem.item as SimpleFormControl<any>).controlOptions.property;
  }
  get form() {
    return this.formData.formGroup;
  }

  get errorMessages() {
    return (this.simpleFormItem.item as SimpleFormControl<any>).controlOptions.errors;
  }
}
