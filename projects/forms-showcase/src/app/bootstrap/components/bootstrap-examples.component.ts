import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { SimpleFormConfig } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-config.interface';
import { SimpleInput } from 'projects/simple-dynamic-forms/src/lib/models/simple-input.model';
import { BootstrapInputComponent } from 'projects/bootstrap-components/src/lib/components/bootstrap-input/bootstrap-input.component';
import { SimpleConstructedForm } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-constructed-form.interface';
import { SimpleFormsService } from 'projects/simple-dynamic-forms/src/lib/services/simple-forms.service';
// tslint:disable-next-line:max-line-length
import { BootstrapCheckboxComponent } from 'projects/bootstrap-components/src/lib/components/bootstrap-checkbox/bootstrap-checkbox.component';
import { of } from 'rxjs';
import { BootstrapSelectComponent } from 'projects/bootstrap-components/src/lib/components/bootstrap-select/bootstrap-select.component';
// tslint:disable-next-line:max-line-length
import { BootstrapTextareaComponent } from 'projects/bootstrap-components/src/lib/components/bootstrap-textarea/bootstrap-textarea.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-bootstrap-examples',
  templateUrl: './bootstrap-examples.component.html',
  styleUrls: ['./bootstrap-examples.component.scss']
})
export class BootstrapExamplesComponent implements OnInit {
  @ViewChild('saveButtonTemplate', { static: false }) saveButton: TemplateRef<any>;

  config: SimpleFormConfig;
  formData: SimpleConstructedForm[];

  constructor(private service: SimpleFormsService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.config = this.createConfig();
    this.formData = this.service.createForm(this.config);
    this.changeDetector.detectChanges();
  }

  createConfig(): SimpleFormConfig {
    return {
      items: [
        {
          item: new SimpleInput<any>({ property: 'ime', value: 'aljaz' }, BootstrapInputComponent)
        },
        {
          item: new SimpleInput<any>(
            {
              property: 'priimek',
              label: 'Priimek field is required',
              value: '',
              validators: [Validators.required],
              errors: [{ formErrorKey: 'required', formErrorDescription: 'Required field!' }]
            },
            BootstrapInputComponent
          )
        },
        {
          item: new SimpleInput<any>({ property: 'masterChef', value: true }, BootstrapCheckboxComponent)
        },
        {
          item: new SimpleInput<any>(
            {
              property: 'izbira',
              value: 2,
              options: of([{ id: 1, value: 'enka' }, { id: 2, value: 'dvojka' }])
            },
            BootstrapSelectComponent
          )
        },
        {
          item: new SimpleInput<any>({ property: 'description', value: 'description' }, BootstrapTextareaComponent)
        }
      ],
      formSaveButtonTemplate: this.saveButton
    };
  }
}
