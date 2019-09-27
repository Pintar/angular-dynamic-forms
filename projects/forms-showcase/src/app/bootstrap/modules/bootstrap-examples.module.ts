import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapExamplesRoutingModule } from './bootstrap-examples-routing.module';
import { BootstrapExamplesComponent } from '../components/bootstrap-examples.component';

import { BootstrapComponentsModule } from 'projects/bootstrap-components/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleDynamicFormsModule } from 'projects/simple-dynamic-forms/src/lib/simple-dynamic-forms.module';

@NgModule({
  declarations: [BootstrapExamplesComponent],
  exports: [BootstrapExamplesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BootstrapExamplesRoutingModule,
    SimpleDynamicFormsModule,
    BootstrapComponentsModule
  ]
})
export class BootstrapExamplesModule {}
