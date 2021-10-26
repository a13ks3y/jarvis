import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, JsonpClientBackend } from '@angular/common/http';
// tslint:disable-next-line:no-namespace
declare namespace clm {
  function tracker(): void;
}
@Component({
  selector: 'the-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.less']
})
export class YoutubeComponent implements OnInit {
  threshold = 9996;
  ctracker: any;
  videoElement: HTMLElement = null;
  browserOpened = false;
  httpsOn = false;
  paused = false;
  togglePauseLocked = false;
  constructor(private http: HttpClient, private jsonp: JsonpClientBackend) {}
  getApiBaseUrl(protocol: string = null): string {
    const host = location.hostname; // '192.168.1.66';
    const port = '3000';
    if (location.protocol === 'https:' || location.port !== port) {
      this.httpsOn = true;
    }
    const protocolStr = 'http:';
    return `${protocolStr}//${host}:${port}/api/youtube/`;
  }

  ngOnInit(): void {
    // @todo: check if server is accessible
    // @todo: should extend HttpClient?
    // @todo: consider using @ServerRequired decorator (create one)
    this.videoElement = document.getElementById('inputVideo');

    const gumFail = () => alert('There was some problem trying to fetch video from your webcam, using a fallback video instead.');
    const gumSuccess = stream => {
      // add camera stream if getUserMedia succeeded
      if ('srcObject' in this.videoElement) {
        // @ts-ignore
        this.videoElement.srcObject = stream as never;
      } else {
        // @ts-ignore
        this.videoElement.src = (window.URL && window.URL.createObjectURL(stream)) as never;
      }
      this.videoElement.onloadedmetadata = () => {
        // adjustVideoProportions();
        // noinspection JSIgnoredPromiseFromCall
        // @ts-ignore
        this.videoElement.play();
        ctrack.start(this.videoElement);
      };
    };




    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    // @ts-ignore
    window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

    // set up video
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({video : true}).then(gumSuccess).catch(gumFail);
    } else if (navigator.getUserMedia) {
      navigator.getUserMedia({video : true}, gumSuccess, gumFail);
    } else {
      alert('Your browser does not seem to support getUserMedia, using a fallback video instead.');
    }

    this.videoElement.addEventListener('canplay', () => {
      const startButton = document.getElementById('startRecognition') as HTMLButtonElement;
      startButton.value = 'start';
      startButton.disabled = null;
    }, false);

    /*********** Code for face tracking *********/

    const ctrack = new clm.tracker();
    ctrack.init();
    const ctx = (document.getElementById('ctx') as HTMLCanvasElement).getContext('2d');
    const update = e => {
      const convergence = ctrack.getConvergence();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);


      if (convergence >= this.threshold) {
/*
        if (!this.togglePauseLocked && this.browserOpened && !this.paused) {
          this.pause();
          this.lockTogglePause();
        }
*/
      } else {
        ctrack.draw(ctx.canvas);
/*
        if (!this.togglePauseLocked && this.browserOpened && this.paused) {
          this.play();
          this.lockTogglePause();
        }
*/
      }
    };
    document.addEventListener('clmtrackrIteration', update, false);
    setInterval(update, 6666);
  }

  lockTogglePause(): void {
    this.togglePauseLocked = true;
    setTimeout(() => this.togglePauseLocked = false, 6666);
  }


  callFuckingApi(api: string): Promise<void> {
    return new Promise<void>(resolve => {
      // @todo: check if other orgin too. Probably just fall-back to JSONP if http didn't worked? Or use JSONP always?
      if (this.httpsOn) {
        try {
          this.jsonp.handle(new HttpRequest('JSONP', this.getApiBaseUrl('http') + api)).subscribe(() => {
            resolve();
          });
        } catch (e) {
          console.error(e);
          const script = document.createElement('img');
          script.src = this.getApiBaseUrl('http') + api;

          const resolveAndClean = (element) => {
            resolve();
            element.parentNode.removeChild(element);
            // document.body.removeChild(element);
          };
          script.onload = resolveAndClean;
          script.onerror = resolveAndClean;
          document.body.appendChild(script);
        }

      } else {
        this.http.get(this.getApiBaseUrl() + api).subscribe(() => {
          resolve();
        });
      }
    });
  }
  start(): void {
    // @todo: let user choose which node should run youtube
    if (this.browserOpened) {
      // @todo: replace with pop-up
      alert('Already started!');
      return;
    }
    this.callFuckingApi('start').then(() => {
      this.browserOpened = true;
    });
  }
  stop(): void {
    this.callFuckingApi('stop').then(() => {
      this.browserOpened = false;
    });
  }
  play(): void {
    this.callFuckingApi('play').then(() => {
      this.paused = false;
    });
  }
  pause(): void {
    this.callFuckingApi('pause').then(() => {
      this.paused = true;
    });
  }
  next(): void {
    this.callFuckingApi('next');
  }
  prev(): void {
    this.callFuckingApi('perv');
  }
  toggleFullscreen(): void {
    this.callFuckingApi('toggleFullscreen');
  }

}
