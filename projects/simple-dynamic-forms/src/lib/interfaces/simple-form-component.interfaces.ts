import { FormComponentType } from '../enums/form-component-type.enum';
import { SimpleConstructedForm } from './simple-constructed-form.interface';

export interface SimpleFormComponent {
  component: any;
  componentType: FormComponentType;
}
