import { Component, OnInit } from '@angular/core';
import { SimpleBaseComponent } from 'projects/simple-dynamic-forms/src/lib/helpers/simple-base-component.helper';

@Component({
  selector: 'lib-bootstrap-textarea',
  templateUrl: './bootstrap-textarea.component.html'
})
export class BootstrapTextareaComponent extends SimpleBaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
