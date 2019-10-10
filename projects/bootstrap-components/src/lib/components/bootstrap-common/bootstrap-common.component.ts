import { Component, OnInit, Input } from '@angular/core';
import { ComponentCommonInput } from '../../interfaces/component-common-input.interface';

@Component({
  selector: 'lib-bootstrap-common',
  templateUrl: './bootstrap-common.component.html'
})
export class BootstrapCommonComponent implements OnInit {
  @Input() data: ComponentCommonInput;

  constructor() {}

  ngOnInit() {}

  get labelText() {
    return this.data.labelText;
  }

  get formControl() {
    return this.data.formControl;
  }

  get formControlName() {
    return this.data.formControlName;
  }

  get errorMessages() {
    return this.data.errorMessages;
  }

  get constructedForm() {
    return this.data.constructedForm;
  }
}
