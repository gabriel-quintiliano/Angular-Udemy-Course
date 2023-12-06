import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerView2Component } from './eager-view2.component';

describe('EagerView2Component', () => {
  let component: EagerView2Component;
  let fixture: ComponentFixture<EagerView2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EagerView2Component]
    });
    fixture = TestBed.createComponent(EagerView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
