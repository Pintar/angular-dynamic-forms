import { Component, OnInit, Input } from '@angular/core';
import { SimpleFormConfig } from '../../interfaces/simple-form-config.interface';
import { SimpleConstructedForm } from '../../interfaces/simple-constructed-form.interface';
import { SimpleFormsService } from '../../services/simple-forms.service';

@Component({
  selector: 'lib-simple-form-container',
  templateUrl: './simple-form-container.component.html'
})
export class SimpleFormContainerComponent implements OnInit {
  @Input() config: SimpleFormConfig;
  @Input() formData: SimpleConstructedForm[];

  constructor(private service: SimpleFormsService) {}

  ngOnInit() {}

  canSave(): boolean {
    return true;
  }

  onSubmit() {
    console.log(this.service.getRootForm(this.formData).formGroup.value);
  }

  get form() {
    return this.formData[0].formGroup;
  }
}
