import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Default1Component } from './default1.component';

describe('Default1Component', () => {
  let component: Default1Component;
  let fixture: ComponentFixture<Default1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Default1Component]
    });
    fixture = TestBed.createComponent(Default1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
