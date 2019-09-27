import { Component, OnInit, Input, Renderer2, ElementRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormItemHostDirective } from '../../directives/form-item-host.directive';
import { SimpleFormItem } from '../../interfaces/simple-form-item.interface';
import { SimpleConstructedForm } from '../../interfaces/simple-constructed-form.interface';
import { SimpleComponentProperties } from '../../interfaces/simple-component-properties.interface';
import { SimpleFormsService } from '../../services/simple-forms.service';

@Component({
  selector: 'lib-item-renderer',
  templateUrl: './item-renderer.component.html'
})
export class ItemRendererComponent implements OnInit {
  @Input() formItem: SimpleFormItem;
  @Input() formData: SimpleConstructedForm[];
  @ViewChild(FormItemHostDirective, { static: true }) itemHost: FormItemHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private simpleFormService: SimpleFormsService
  ) {}

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.formItem.item.component);
    const viewContainerRef = this.itemHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as SimpleComponentProperties).simpleFormItem = this.formItem;
    (componentRef.instance as SimpleComponentProperties).formData = this.simpleFormService.getFormData(
      this.formItem,
      this.formData
    );
  }
}
