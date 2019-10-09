import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormErrorComponent } from './simple-form-error.component';

describe('SimpleFormErrorComponent', () => {
  let component: SimpleFormErrorComponent;
  let fixture: ComponentFixture<SimpleFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleFormErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
