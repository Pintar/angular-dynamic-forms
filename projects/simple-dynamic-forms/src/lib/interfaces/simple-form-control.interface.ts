import { SimpleFormComponent } from './simple-form-component.interfaces';
import { SimpleFormError } from './simple-form-error.interface';
import { SimpleCodelist } from './simple-codelist.interface';
import { Observable } from 'rxjs';
import { ValidatorFn } from '@angular/forms';

export interface SimpleFormControl<T> extends SimpleFormComponent {
  controlOptions: SimpleControlOptions<T>;
}

export interface SimpleControlOptions<T> {
  property: string;
  value?: T;
  label?: string;
  validators?: ValidatorFn[];
  options?: Observable<SimpleCodelist<string | number>[]>;
  errors?: SimpleFormError[];
}
