import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRendererComponent } from './item-renderer.component';
import { SimpleFormsService } from '../../services/simple-forms.service';
import { SimpleDynamicFormsService } from 'projects/simple-dynamic-forms/src/public-api';
import { FormItemHostDirective } from '../../directives/form-item-host.directive';

import { Component, OnInit, NgModule } from '@angular/core';
import { SimpleFormControl } from '../../interfaces/simple-form-control.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'selector-test',
  template: 'it works'
})
class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [TestComponent],
  entryComponents: [TestComponent]
})
class TestModule {}

describe('ItemRendererComponent', () => {
  let component: ItemRendererComponent;
  let fixture: ComponentFixture<ItemRendererComponent>;

  const simpleServiceMock = {
    getFormData: () => null
  } as Partial<SimpleDynamicFormsService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [ItemRendererComponent, FormItemHostDirective],
      providers: [
        {
          provide: SimpleFormsService,
          useValue: simpleServiceMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRendererComponent);
    component = fixture.componentInstance;
    component.formItem = {
      item: {
        component: TestComponent
      } as SimpleFormControl<any>
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display content from test component', () => {
    expect((fixture.debugElement.nativeElement as HTMLElement).textContent).toEqual('it works');
  });
});
