import { NgModule } from '@angular/core';
import { BootstrapComponentsComponent } from './bootstrap-components.component';
import { BootstrapInputComponent } from './components/bootstrap-input/bootstrap-input.component';
import { BootstrapSelectComponent } from './components/bootstrap-select/bootstrap-select.component';
import { BootstrapTextareaComponent } from './components/bootstrap-textarea/bootstrap-textarea.component';
import { BootstrapDatepickerComponent } from './components/bootstrap-datepicker/bootstrap-datepicker.component';
import { BootstrapCheckboxComponent } from './components/bootstrap-checkbox/bootstrap-checkbox.component';
import { BootstrapRadioComponent } from './components/bootstrap-radio/bootstrap-radio.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleDynamicFormsModule } from 'projects/simple-dynamic-forms/src/public-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapCommonComponent } from './components/bootstrap-common/bootstrap-common.component';

@NgModule({
  declarations: [
    BootstrapComponentsComponent,
    BootstrapInputComponent,
    BootstrapSelectComponent,
    BootstrapTextareaComponent,
    BootstrapDatepickerComponent,
    BootstrapCheckboxComponent,
    BootstrapRadioComponent,
    BootstrapCommonComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, SimpleDynamicFormsModule, NgbModule],
  exports: [
    BootstrapComponentsComponent,
    BootstrapInputComponent,
    BootstrapSelectComponent,
    BootstrapTextareaComponent,
    BootstrapDatepickerComponent,
    BootstrapCheckboxComponent,
    BootstrapRadioComponent
  ],
  entryComponents: [
    BootstrapInputComponent,
    BootstrapSelectComponent,
    BootstrapTextareaComponent,
    BootstrapDatepickerComponent,
    BootstrapCheckboxComponent,
    BootstrapRadioComponent
  ]
})
export class BootstrapComponentsModule {}
