import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTeste1Component } from './comp-teste1.component';

describe('CompTeste1Component', () => {
  let component: CompTeste1Component;
  let fixture: ComponentFixture<CompTeste1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompTeste1Component]
    });
    fixture = TestBed.createComponent(CompTeste1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
