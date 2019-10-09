import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-simple-form-label',
  templateUrl: './simple-form-label.component.html'
})
export class SimpleFormLabelComponent implements OnInit {
  @Input() labelText: string;
  @Input() formControlRef: FormControl;
  @Input() property: string;

  required = false;

  constructor() {}

  ngOnInit() {
    this.required = this.isRequired();
  }

  isRequired(): boolean {
    if (!this.formControlRef.validator) {
      return false;
    }
    const match = Object.keys(this.formControlRef.validator).filter(x => x === 'required');
    return match ? true : false;
  }
}
