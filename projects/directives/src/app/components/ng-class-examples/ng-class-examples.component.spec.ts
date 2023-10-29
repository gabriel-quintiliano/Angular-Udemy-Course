import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassExamplesComponent } from './ng-class-examples.component';

describe('NgClassExamplesComponent', () => {
  let component: NgClassExamplesComponent;
  let fixture: ComponentFixture<NgClassExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgClassExamplesComponent]
    });
    fixture = TestBed.createComponent(NgClassExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
