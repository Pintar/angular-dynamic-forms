import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDynamicFormsComponent } from './simple-dynamic-forms.component';

describe('SimpleDynamicFormsComponent', () => {
  let component: SimpleDynamicFormsComponent;
  let fixture: ComponentFixture<SimpleDynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleDynamicFormsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
