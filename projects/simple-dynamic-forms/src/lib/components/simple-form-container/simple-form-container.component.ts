import { Component, OnInit, Input } from '@angular/core';
import { SimpleFormConfig } from '../../interfaces/simple-form-config.interface';

@Component({
  selector: 'lib-simple-form-container',
  templateUrl: './simple-form-container.component.html'
})
export class SimpleFormContainerComponent implements OnInit {
  @Input() config: SimpleFormConfig;

  constructor() {}

  ngOnInit() {}

  canSave(): boolean {
    return true;
  }

  onSubmit() {}
}
