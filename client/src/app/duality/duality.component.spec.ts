import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualityComponent } from './duality.component';

describe('DualityComponent', () => {
  let component: DualityComponent;
  let fixture: ComponentFixture<DualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
