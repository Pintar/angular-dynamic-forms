import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libFormSaveButton]'
})
export class FormSaveButtonDirective {
  constructor(public template: TemplateRef<any>) {}
}
