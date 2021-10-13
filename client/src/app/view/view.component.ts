import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'the-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements AfterViewInit  {

  constructor() { }
  inputVideoEnabled = false;
  @ViewChild('inputVideo')
  inputVideo: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.inputVideo.nativeElement.addEventListener('canplay', () => {
      this.inputVideoEnabled = true;
    });
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
    const gumFail = (e) => {
      this.inputVideoEnabled = true;
      alert('There was some problem trying to fetch video from your webcam, using a fallback video instead. \n' + e);
    };
    const gumSuccess = stream => {
      // add camera stream if getUserMedia succeeded
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

  stopInput(): void {
    this.inputVideo.nativeElement.pause();
  }
}
