import { Component, OnInit } from '@angular/core';
import { SimpleBaseComponent } from 'projects/simple-dynamic-forms/src/lib/helpers/simple-base-component.helper';

@Component({
  selector: 'lib-bootstrap-checkbox',
  templateUrl: './bootstrap-checkbox.component.html'
})
export class BootstrapCheckboxComponent extends SimpleBaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
