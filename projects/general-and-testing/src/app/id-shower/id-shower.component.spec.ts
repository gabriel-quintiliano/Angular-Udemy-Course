import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdShowerComponent } from './id-shower.component';

describe('IdShowerComponent', () => {
  let component: IdShowerComponent;
  let fixture: ComponentFixture<IdShowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdShowerComponent]
    });
    fixture = TestBed.createComponent(IdShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
