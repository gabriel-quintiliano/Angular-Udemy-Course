import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleExamplesComponent } from './ng-style-examples.component';

describe('NgStyleExamplesComponent', () => {
  let component: NgStyleExamplesComponent;
  let fixture: ComponentFixture<NgStyleExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgStyleExamplesComponent]
    });
    fixture = TestBed.createComponent(NgStyleExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
