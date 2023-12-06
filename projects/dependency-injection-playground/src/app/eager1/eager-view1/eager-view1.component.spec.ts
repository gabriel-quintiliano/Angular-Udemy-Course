import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerView1Component } from './eager-view1.component';

describe('EagerView1Component', () => {
  let component: EagerView1Component;
  let fixture: ComponentFixture<EagerView1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EagerView1Component]
    });
    fixture = TestBed.createComponent(EagerView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
