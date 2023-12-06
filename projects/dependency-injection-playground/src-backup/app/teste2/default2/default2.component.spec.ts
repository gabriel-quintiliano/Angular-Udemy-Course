import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Default2Component } from './default2.component';

describe('Default2Component', () => {
  let component: Default2Component;
  let fixture: ComponentFixture<Default2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Default2Component]
    });
    fixture = TestBed.createComponent(Default2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
