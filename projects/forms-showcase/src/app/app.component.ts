import { Component, OnInit } from '@angular/core';
import { SimpleFormConfig } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-config.interface';
import { BootstrapInputComponent } from 'projects/bootstrap-components/src/lib/components/bootstrap-input/bootstrap-input.component';
import { SimpleFormsService } from 'projects/simple-dynamic-forms/src/lib/services/simple-forms.service';
import { SimpleInput } from 'projects/simple-dynamic-forms/src/lib/models/simple-input.model';
import { SimpleConstructedForm } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-constructed-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms-showcase';
  config: SimpleFormConfig = {
    items: [
      {
        item: new SimpleInput<any>({ property: 'ime', value: 'aljaz' }, BootstrapInputComponent)
      }
    ]
  };
  formData: SimpleConstructedForm[];

  constructor(private service: SimpleFormsService) {}

  ngOnInit() {
    this.formData = this.service.createForm(this.config);
  }
}
