import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementInjectorComponent } from './element-injector.component';

describe('ElementInjectorComponent', () => {
  let component: ElementInjectorComponent;
  let fixture: ComponentFixture<ElementInjectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementInjectorComponent]
    });
    fixture = TestBed.createComponent(ElementInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
