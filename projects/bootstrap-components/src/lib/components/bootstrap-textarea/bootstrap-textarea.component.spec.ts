import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTextareaComponent } from './bootstrap-textarea.component';

describe('BootstrapTextareaComponent', () => {
  let component: BootstrapTextareaComponent;
  let fixture: ComponentFixture<BootstrapTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapTextareaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
