import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormLabelComponent } from './simple-form-label.component';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

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
    component.formControlRef = new FormControl();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have label text', () => {
    const text = 'label text';
    component.labelText = text;
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(text);
  });

  it('should have * if we have required validator', () => {
    spyOn(component, 'isRequired').and.returnValue(true);
    fixture.detectChanges();
    expect((fixture.debugElement.query(By.css('sup')).nativeElement as HTMLElement).textContent).toContain('*');
  });

  it('should not have * if we do not have required validator', () => {
    spyOn(component, 'isRequired').and.returnValue(false);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('sup'))).toBeNull();
  });
});
