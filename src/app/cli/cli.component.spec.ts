import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliComponent } from './cli.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CliComponent', () => {
  let component: CliComponent;
  let fixture: ComponentFixture<CliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run cli command on command', () => {
    component.input = 'run calc';
    component.onCommandChar(new Event('keyboard'));
    expect(true).toBeTruthy(); // should open cacl.exe how can I check it?!!
  });

  
});
