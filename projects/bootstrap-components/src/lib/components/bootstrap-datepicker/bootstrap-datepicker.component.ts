import { Component, OnInit } from '@angular/core';
import { SimpleBaseComponent } from 'projects/simple-dynamic-forms/src/lib/helpers/simple-base-component.helper';

@Component({
  selector: 'lib-bootstrap-datepicker',
  templateUrl: './bootstrap-datepicker.component.html'
})
export class BootstrapDatepickerComponent extends SimpleBaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
