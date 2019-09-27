import { SimpleFormComponent } from './simple-form-component.interfaces';

export interface SimpleFormControl<T> extends SimpleFormComponent {
  controlOptions: SimpleControlOptions<T>;
}

export interface SimpleControlOptions<T> {
  property: string;
  value?: T;
  label?: string;
}
