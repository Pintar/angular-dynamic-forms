import { Component, OnInit } from '@angular/core';
import { SimpleBaseComponent } from 'projects/simple-dynamic-forms/src/lib/helpers/simple-base-component.helper';

@Component({
  selector: 'lib-bootstrap-input',
  templateUrl: './bootstrap-input.component.html'
})
export class BootstrapInputComponent extends SimpleBaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
