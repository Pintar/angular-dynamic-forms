import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormLabelComponent } from './simple-form-label.component';

describe('SimpleFormLabelComponent', () => {
  let component: SimpleFormLabelComponent;
  let fixture: ComponentFixture<SimpleFormLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleFormLabelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
