import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { SimpleFormContainerComponent } from './simple-form-container.component';
import { SimpleFormsService } from '../../services/simple-forms.service';
import { ItemRendererComponent } from '../item-renderer/item-renderer.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('SimpleFormContainerComponent', () => {
  let component: SimpleFormContainerComponent;
  let fixture: ComponentFixture<SimpleFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleFormContainerComponent, MockComponent(ItemRendererComponent)],
      providers: [{ provide: SimpleFormsService, useValue: {} }],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormContainerComponent);
    component = fixture.componentInstance;
    component.config = { items: [] };
    component.formData = [
      {
        formGroup: new FormBuilder().group({ demo: [''] }),
        formControl: null,
        item: null
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
