import { Component, OnInit, Input, Renderer2, ElementRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormItemHostDirective } from '../../directives/form-item-host.directive';
import { SimpleFormItem } from '../../interfaces/simple-form-item.interface';

@Component({
  selector: 'lib-item-renderer',
  templateUrl: './item-renderer.component.html'
})
export class ItemRendererComponent implements OnInit {
  @Input() formItem: SimpleFormItem;
  @ViewChild(FormItemHostDirective, { static: true }) itemHost: FormItemHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.formItem.component);
    const viewContainerRef = this.itemHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
