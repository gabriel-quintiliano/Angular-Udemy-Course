import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyView3Component } from './lazy-view3.component';

describe('LazyView3Component', () => {
  let component: LazyView3Component;
  let fixture: ComponentFixture<LazyView3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyView3Component]
    });
    fixture = TestBed.createComponent(LazyView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
