import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleControlContainerComponent } from './simple-control-container.component';

describe('SimpleControlContainerComponent', () => {
  let component: SimpleControlContainerComponent;
  let fixture: ComponentFixture<SimpleControlContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleControlContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleControlContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
