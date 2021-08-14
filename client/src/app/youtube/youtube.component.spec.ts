import {ComponentFixture, TestBed} from '@angular/core/testing';

import {YoutubeComponent} from './youtube.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Type} from '@angular/core';
import {JsonpClientBackend} from "@angular/common/http";
import {JsonpClientBackendMock} from "./jsonpClientBackendMock";

describe('YoutubeComponent', () => {
  let component: YoutubeComponent;
  let fixture: ComponentFixture<YoutubeComponent>;
  let httpMock: HttpTestingController;
  let jsonpMock: JsonpClientBackendMock;

  beforeEach(async () => {
    jsonpMock = new JsonpClientBackendMock();
    await TestBed.configureTestingModule({
      declarations: [ YoutubeComponent ],
      imports: [HttpClientTestingModule],
      providers: [JsonpClientBackend]
    }).overrideProvider(JsonpClientBackend, {useValue: jsonpMock})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
