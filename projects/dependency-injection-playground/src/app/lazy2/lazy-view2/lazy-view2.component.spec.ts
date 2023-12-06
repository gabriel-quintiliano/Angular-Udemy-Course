import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyView2Component } from './lazy-view2.component';

describe('LazyView2Component', () => {
  let component: LazyView2Component;
  let fixture: ComponentFixture<LazyView2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyView2Component]
    });
    fixture = TestBed.createComponent(LazyView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
