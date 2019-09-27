import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapRadioComponent } from './bootstrap-radio.component';

describe('BootstrapRadioComponent', () => {
  let component: BootstrapRadioComponent;
  let fixture: ComponentFixture<BootstrapRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapRadioComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
