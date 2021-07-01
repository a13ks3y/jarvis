import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindComponent } from './mind.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MindComponent', () => {
  let component: MindComponent;
  let fixture: ComponentFixture<MindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ MindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
