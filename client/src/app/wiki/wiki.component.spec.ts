import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiComponent } from './wiki.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Type} from '@angular/core';

describe('WikiComponent', () => {
  let component: WikiComponent;
  let fixture: ComponentFixture<WikiComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiComponent);
    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create, should not be started by default', () => {
    expect(component).toBeTruthy();
    expect(component.started).toBeFalse();
  });
  // @todo: how to implement this test: should check and show valid state taken from server on start-up?
  /*
    it('should send "start" signal to server when start button is clicked', async () => {
      await component.toggleStatus();
      expect(component.started).toBeTruthy();
    });
  */
});
