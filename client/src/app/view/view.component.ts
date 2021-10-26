import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ViewService} from '../view.service';

@Component({
  selector: 'the-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements AfterViewInit  {
  private stream: never;
  private ctx: CanvasRenderingContext2D;
  constructor(private service: ViewService) {}
  inputVideoEnabled = false;
  @ViewChild('inputVideo')
  inputVideo: ElementRef<HTMLVideoElement>;
  @ViewChild('inputVideoCanvas')
  inputVideoCanvas: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    this.inputVideo.nativeElement.addEventListener('canplay', () => {
      this.inputVideoEnabled = true;
    });
    this.ctx = this.inputVideoCanvas.nativeElement.getContext('2d');
    setTimeout(() => {
      this.inputVideoEnabled = true;
    }, 666);
  }

  startInput(): void {
    const videoElement = this.inputVideo.nativeElement;
    if (!videoElement.paused) {
      setTimeout(() => videoElement.play(), 0);
      return;
    }
    // @todo: DRY move it to separate method (maybe to some service?)
    const gumFail = (e) => {
      this.inputVideoEnabled = true;
      alert('There was some problem trying to fetch video from your webcam, using a fallback video instead. \n' + e);
    };
    const gumSuccess = stream => {
      // add camera stream if getUserMedia succeeded
      this.stream = stream as never;
      if ('srcObject' in videoElement) {
        // @ts-ignore
        videoElement.srcObject = stream as never;
      } else {
        // @ts-ignore
        videoElement.src = (window.URL && window.URL.createObjectURL(stream)) as never;
      }
      videoElement.onloadedmetadata = () => {
        // adjustVideoProportions();
        // noinspection JSIgnoredPromiseFromCall
        videoElement.play();
        this.inputVideoCanvas.nativeElement.setAttribute('width', videoElement.getAttribute('width'));
        this.inputVideoCanvas.nativeElement.setAttribute('height', videoElement.getAttribute('height'));
      };
      this.inputVideoEnabled = false;
    };




    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    // @ts-ignore
    window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

    // set up video
    if (navigator.mediaDevices) {
      if (navigator.getUserMedia) {
        navigator.getUserMedia({video : true}, gumSuccess, gumFail);
      } else {
        navigator.mediaDevices.getUserMedia({video : true}).then(gumSuccess).catch(gumFail);
      }
    } else if (navigator.getUserMedia) {
      navigator.getUserMedia({video : true}, gumSuccess, gumFail);
    } else {
      alert('Your browser does not seem to support getUserMedia, using a fallback video instead.');
    }

  }

  pauseInput(): void {
    this.inputVideo.nativeElement.pause();
  }
  stopInput(): void {
    const stream = this.stream as MediaStream;
    stream.removeTrack(stream.getTracks()[0]);
    this.inputVideo.nativeElement.setAttribute('src', null);
  }
  captureOnce(): void {
    this.ctx.canvas.width = this.inputVideo.nativeElement.videoWidth;
    this.ctx.canvas.height = this.inputVideo.nativeElement.videoHeight;
    this.ctx.drawImage(this.inputVideo.nativeElement, 0, 0);
    const data = this.ctx.canvas.toDataURL('image/png');
    this.service.captureDataUrlOnce(data, new Date());
  }
}
