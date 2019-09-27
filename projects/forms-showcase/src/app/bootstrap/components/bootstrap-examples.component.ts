import { Component, OnInit } from '@angular/core';
import { SimpleFormConfig } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-config.interface';
import { SimpleInput } from 'projects/simple-dynamic-forms/src/lib/models/simple-input.model';
import { BootstrapInputComponent } from 'projects/bootstrap-components/src/lib/components/bootstrap-input/bootstrap-input.component';
import { SimpleConstructedForm } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-constructed-form.interface';
import { SimpleFormsService } from 'projects/simple-dynamic-forms/src/lib/services/simple-forms.service';
// tslint:disable-next-line:max-line-length
import { BootstrapCheckboxComponent } from 'projects/bootstrap-components/src/lib/components/bootstrap-checkbox/bootstrap-checkbox.component';

@Component({
  selector: 'app-bootstrap-examples',
  templateUrl: './bootstrap-examples.component.html',
  styleUrls: ['../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class BootstrapExamplesComponent implements OnInit {
  config: SimpleFormConfig = {
    items: [
      {
        item: new SimpleInput<any>({ property: 'ime', value: 'aljaz' }, BootstrapInputComponent)
      },
      {
        item: new SimpleInput<any>({ property: 'masterChef', value: true }, BootstrapCheckboxComponent)
      }
    ]
  };
  formData: SimpleConstructedForm[];

  constructor(private service: SimpleFormsService) {}

  ngOnInit() {
    this.formData = this.service.createForm(this.config);
  }
}
