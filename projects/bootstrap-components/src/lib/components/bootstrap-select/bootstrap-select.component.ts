import { Component, OnInit } from '@angular/core';
import { SimpleBaseComponent } from 'projects/simple-dynamic-forms/src/lib/helpers/simple-base-component.helper';
import { SimpleFormControl } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-control.interface';

@Component({
  selector: 'lib-bootstrap-select',
  templateUrl: './bootstrap-select.component.html'
})
export class BootstrapSelectComponent extends SimpleBaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  getSelectedValue(id: number | string): string {
    return this.formControlValue === id ? 'selected' : null;
  }

  getEmptySelectedValue() {
    return !this.formControlValue ? 'selected' : null;
  }

  get options() {
    return (this.simpleFormItem.item as SimpleFormControl<any>).controlOptions.options;
  }

  get formControlValue(): number | string {
    return this.form.get(this.formControlName).value;
  }
}
