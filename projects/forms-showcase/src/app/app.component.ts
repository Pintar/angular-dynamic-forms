import { Component } from '@angular/core';
import { SimpleFormConfig } from 'projects/simple-dynamic-forms/src/lib/interfaces/simple-form-config.interface';
import { BootstrapInputComponent } from 'projects/bootstrap-components/src/lib/components/bootstrap-input/bootstrap-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-showcase';
  config: SimpleFormConfig = {
    items: [
      {
        component: BootstrapInputComponent,
        children: [{ component: BootstrapInputComponent }]
      },
      {
        component: BootstrapInputComponent,
        children: [{ component: BootstrapInputComponent }]
      }
    ]
  };
}
