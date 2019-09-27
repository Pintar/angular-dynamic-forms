import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libFormItemHost]'
})
export class FormItemHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
