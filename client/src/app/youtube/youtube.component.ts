import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, JsonpClientBackend } from '@angular/common/http';
declare namespace clm {
  function tracker(): void;
};
@Component({
  selector: 'the-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.less']
})
export class YoutubeComponent implements OnInit {
  ctracker: any;
  videoElement: HTMLElement = null;
  browserOpened: boolean = false;
  httpsOn: boolean = false;
  paused: boolean = false;
  togglePauseLocked: boolean = false;
  constructor(private http: HttpClient, private jsonp: JsonpClientBackend) {}
  getApiBaseUrl(protocol: string = null) {
    const host = location.hostname; //'192.168.1.66';
    const port = '3000';
    if (location.protocol === 'https:' || location.port !== port) {
      this.httpsOn = true;
    }
    return `${protocol || location.protocol}//${host}:${port}/api/youtube/`;
  }

  ngOnInit(): void {
    // @todo: check if sevrever is accesseble
    // @todo: should extend HttpClient?
    // @todo: consider using @ServerRequired decorator (create one)
    this.videoElement = document.getElementById('inputVideo');
    
    const gumFail = () => alert("There was some problem trying to fetch video from your webcam, using a fallback video instead.");;
    const gumSuccess = stream => {
      // add camera stream if getUserMedia succeeded
      if ('srcObject' in this.videoElement) {
      this.videoElement['srcObject'] = stream as never;
      } else {
      this.videoElement['src'] = (window.URL && window.URL.createObjectURL(stream)) as never;
      }
      this.videoElement.onloadedmetadata = () => {
        //adjustVideoProportions();
        this.videoElement['play']();
        ctrack.start(this.videoElement);
      }
    };




    navigator.getUserMedia = navigator.getUserMedia || navigator['webkitGetUserMedia'] || navigator['mozGetUserMedia'] || navigator['msGetUserMedia'];
    window.URL = window.URL || window.webkitURL || window['msURL'] || window['mozURL'];

    // set up video
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({video : true}).then(gumSuccess).catch(gumFail);
    } else if (navigator.getUserMedia) {
      navigator.getUserMedia({video : true}, gumSuccess, gumFail);
    } else {
      alert("Your browser does not seem to support getUserMedia, using a fallback video instead.");
    }

    this.videoElement.addEventListener('canplay', ()=>{
      var startbutton = document.getElementById('startRecognition') as HTMLButtonElement;
      startbutton.value = "start";
      startbutton.disabled = null;
    }, false);

    /*********** Code for face tracking *********/
   
    var ctrack = new clm.tracker();
    ctrack.init();
    const ctx = (document.getElementById('ctx') as HTMLCanvasElement).getContext('2d');
    document.addEventListener('clmtrackrIteration', e => {
      const convergence = ctrack.getConvergence();
      if (convergence >= 9996) {
        console.info('NO FACE!');
        if (!this.togglePauseLocked && this.browserOpened && !this.paused) {
          this.pause();
        }
      } else {
        if (!this.togglePauseLocked && this.browserOpened && this.paused) {
          this.play();
        }
        ctx.fillStyle = '#abcdef';
        ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
        ctrack.draw(ctx.canvas);
      }
    }, false);
  }

  lockTogglePause() {
    this.togglePauseLocked = true;
    setTimeout(() => this.togglePauseLocked = false, 6666);
  }


  callFuckingApi(api: string) {    
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
            //document.body.removeChild(element);
          }
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
  pause() : void {
    this.callFuckingApi('pause').then(() => {
      this.paused = true;
    });
  }
  next() : void {
    this.callFuckingApi('next');
  }
  prev() : void {
    this.callFuckingApi('perv');
  }
  toggleFullscreen() : void {
    this.callFuckingApi('toggleFullscreen');
  }  
}
