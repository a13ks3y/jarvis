import { HostListener, Injectable } from '@angular/core';
interface MousePosition {
  px: number;
  py: number;
  ox: number;
  oy: number;
  cx: number;
  cy: number;
  dtc: number; // distance to (screen) center
}
@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public cp: MousePosition = {
    px: 0, py: 0,
    ox: 0,
    oy: 0,
    cx: 0,
    cy: 0,
    dtc: 0 // distance to (screen) center
  }

  constructor() {
  }
}
