import { Component, OnInit } from '@angular/core';
import {AudioService} from '../audio.service';
import { CapitalizePipe } from '../capitalize.pipe';

@Component({
  selector: 'the-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.less']
})
export class SoundComponent implements OnInit {
  tracks: { name: string; url: string }[] = [];
  private locked = false;

  constructor(private audioService: AudioService) {
    this.tracks = audioService.tracks;
  }

  ngOnInit(): void {
  }

  playTrack(track): void {
    if (!this.locked) {
      this.locked = true;
      this.audioService.muted = false;
      this.audioService.play(track.name).finally(() => {
        setTimeout(() => this.locked = false, 666);
      });
    } else {
      console.warn('Too Many press!');
    }
  }
}
