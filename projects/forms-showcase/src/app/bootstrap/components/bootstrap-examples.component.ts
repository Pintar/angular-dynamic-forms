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
// tslint:disable-next-line:max-line-length
import { BootstrapDatepickerComponent } from 'projects/bootstrap-components/src/lib/components/bootstrap-datepicker/bootstrap-datepicker.component';

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
          item: new SimpleInput<any>(
            {
              label: 'Name',
              property: 'name',
              value: 'aljaz'
            },
            BootstrapInputComponent
          )
        },
        {
          item: new SimpleInput<any>(
            {
              property: 'lastName',
              label: 'LastName field is required',
              value: '',
              validators: [Validators.required],
              errors: [{ formErrorKey: 'required', formErrorDescription: 'Required field!' }]
            },
            BootstrapInputComponent
          )
        },
        {
          item: new SimpleInput<any>(
            {
              property: 'releaseDate',
              value: null,
              label: 'Release date'
            },
            BootstrapDatepickerComponent
          )
        },
        {
          item: new SimpleInput<any>(
            {
              property: 'choice',
              value: 2,
              label: 'Select value',
              options: of([{ id: 1, value: 'enka' }, { id: 2, value: 'dvojka' }])
            },
            BootstrapSelectComponent
          )
        },
        {
          item: new SimpleInput<any>(
            {
              property: 'description',
              value: 'description',
              label: 'Description'
            },
            BootstrapTextareaComponent
          )
        },
        {
          item: new SimpleInput<any>({ property: 'masterChef', value: true }, BootstrapCheckboxComponent)
        }
      ],
      formSaveButtonTemplate: this.saveButton
    };
  }
}
