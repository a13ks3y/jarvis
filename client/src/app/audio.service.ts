import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  // @todo: make private? introduce getter/setter? control over UI/config/both? should be false by default?
  muted = true;
  // @todo make a Track class?
  readonly tracks: {
    loaded: boolean;
    name: string;
    url: string;
  } [] = [
    {
      loaded: false,
      name: 'portal-gun',
      url: 'assets/sfx-portal-gun.mp3'
    }
  ];
  constructor() {
    this.tracks.forEach(track => {
      const trackElement = document.createElement('audio');
      trackElement.src = track.url;
      trackElement.id = `audio-${track.name}`;
      trackElement.addEventListener('canplay', () => track.loaded = true);
      document.body.appendChild(trackElement);
    });
  }
  // todo: unit-test it!
  play(trackName: string): Promise<{endPromise: Promise<void>}> {
    if (this.muted) { return Promise.resolve({endPromise: Promise.resolve()}); }
    const trackElement = document.getElementById(`audio-${trackName}`) as HTMLAudioElement;
    if (!trackElement) { throw  new Error(`No element with id: audio-${trackName}`); }
    const startPromise = new Promise<{endPromise: Promise<void>}>((startResolve) => {
      if (trackElement) {
        trackElement.play().then(() => {
          const endPromise = new Promise<void>((endResolve) => {
            setTimeout(() => {
              trackElement.pause();
              trackElement.currentTime = 0;
              endResolve();
            }, trackElement.duration * 1000);
          });
          startResolve({endPromise});
        });
      } else {
        console.error('No track element with name:', trackName);
      }
    });
    return startPromise;
  }
}
