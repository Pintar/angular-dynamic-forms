import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleDynamicFormsModule } from 'projects/simple-dynamic-forms/src/lib/simple-dynamic-forms.module';
import { BootstrapComponentsModule } from 'projects/bootstrap-components/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SimpleDynamicFormsModule, BootstrapComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
