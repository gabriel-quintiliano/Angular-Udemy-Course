import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryOneComponent } from './secondary-one.component';

describe('SecondaryOneComponent', () => {
  let component: SecondaryOneComponent;
  let fixture: ComponentFixture<SecondaryOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryOneComponent]
    });
    fixture = TestBed.createComponent(SecondaryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
