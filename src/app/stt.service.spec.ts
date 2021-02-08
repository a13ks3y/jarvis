import { TestBed } from '@angular/core/testing';

import { SttService } from './stt.service';

describe('SttService', () => {
  let service: SttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should has colors and grammar', () => {
    expect(service.colors.length).toEqual(9);
    expect(service.grammar).toContain('#JSGF V1.0; grammar colors; public <color>');
  });

  it('should has initialized recognition', () => {
    expect(service.recognition).toBeInstanceOf(SpeechRecognition);
  });

  it('should convert audio input to text', () => {
    // @todo how to test it?
  });
});
