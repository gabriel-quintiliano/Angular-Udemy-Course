import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTeste2Component } from './comp-teste2.component';

describe('CompTeste2Component', () => {
  let component: CompTeste2Component;
  let fixture: ComponentFixture<CompTeste2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompTeste2Component]
    });
    fixture = TestBed.createComponent(CompTeste2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
