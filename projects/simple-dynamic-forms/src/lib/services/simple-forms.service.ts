import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SimpleFormConfig } from '../interfaces/simple-form-config.interface';
import { SimpleFormItem } from '../interfaces/simple-form-item.interface';
import { FormComponentType } from '../enums/form-component-type.enum';
import { SimpleFormControl } from '../interfaces/simple-form-control.interface';
import { SimpleConstructedForm } from '../interfaces/simple-constructed-form.interface';

@Injectable({
  providedIn: 'root'
})
export class SimpleFormsService {
  constructor(private formBuilder: FormBuilder) {}

  createForm(config: SimpleFormConfig): SimpleConstructedForm[] {
    return this.createFormGroup(config.items, []);
  }

  createFormGroup(items: SimpleFormItem[], result: SimpleConstructedForm[]): SimpleConstructedForm[] {
    const formGroup = this.formBuilder.group({});
    items.forEach(x => {
      if (x.item.componentType === FormComponentType.formControl) {
        const controlData = x.item as SimpleFormControl<any>;
        const validators = controlData.controlOptions.validators ? controlData.controlOptions.validators : [];
        const newControl = new FormControl(controlData.controlOptions.value, validators);
        formGroup.addControl(controlData.controlOptions.property, newControl);
        const formData: SimpleConstructedForm = { formControl: newControl, formGroup, item: x.item };
        result = [...result, formData];
      }
    });
    return result;
  }

  createFormArray() {}

  createFormControl(data: SimpleFormControl<any>) {
    // new FormControl(, [data.controlOptions.value]);
  }

  findFormControl(config: SimpleFormItem, form: FormGroup, item: any) {}

  findFormGroup(config: SimpleFormItem, form: FormGroup, item: any) {}

  getFormData(formItem: SimpleFormItem, formData: SimpleConstructedForm[]): SimpleConstructedForm {
    const item = formData.reduce((result, current, index) => {
      if (result) {
        return result;
      }
      if (formItem.item === current.item) {
        return current;
      }
      return null;
    }, null);
    return item;
  }

  getRootForm(formData: SimpleConstructedForm[]) {
    return formData[0];
  }
}
