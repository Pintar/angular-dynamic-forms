import { NgModule } from '@angular/core';
import { SimpleDynamicFormsComponent } from './simple-dynamic-forms.component';
import { SimpleFormContainerComponent } from './components/simple-form-container/simple-form-container.component';
import { SimpleFormArrayComponent } from './components/simple-form-array/simple-form-array.component';
import { SimpleFormGroupComponent } from './components/simple-form-group/simple-form-group.component';
import { SimpleControlContainerComponent } from './components/simple-control-container/simple-control-container.component';
import { SimpleInputComponent } from './components/simple-input/simple-input.component';
import { FormItemHostDirective } from './directives/form-item-host.directive';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemRendererComponent } from './components/item-renderer/item-renderer.component';
import { FormSaveButtonDirective } from './directives/form-save-button.directive';
import { SimpleFormErrorComponent } from './components/simple-form-error/simple-form-error.component';
import { SimpleFormLabelComponent } from './components/simple-form-label/simple-form-label.component';

@NgModule({
  declarations: [
    SimpleDynamicFormsComponent,
    SimpleFormContainerComponent,
    SimpleFormArrayComponent,
    SimpleFormGroupComponent,
    SimpleControlContainerComponent,
    SimpleInputComponent,
    FormItemHostDirective,
    ItemRendererComponent,
    FormSaveButtonDirective,
    SimpleFormErrorComponent,
    SimpleFormLabelComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    SimpleDynamicFormsComponent,
    SimpleFormContainerComponent,
    SimpleInputComponent,
    SimpleFormErrorComponent,
    SimpleFormLabelComponent
  ],
  entryComponents: [SimpleInputComponent]
})
export class SimpleDynamicFormsModule {}
