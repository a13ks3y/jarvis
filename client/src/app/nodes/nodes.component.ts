import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThreeService } from '../three.service';
import * as THREE from 'three';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'the-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.less']
})
export class NodesComponent implements OnInit {

  constructor(private three: ThreeService, private utils: UtilsService) { }

  public icosahedron: THREE.Mesh;

  @ViewChild('ctx', {static: true})
  public canvas: ElementRef<HTMLCanvasElement>;
  public o: number;

  ngOnInit(): void {
    this.three.onKeyFrame = this.onKeyFrame.bind(this);
    const geometry = new THREE.IcosahedronGeometry(3);
    const material = new THREE.MeshBasicMaterial(0xff9900); // new THREE.MeshBasicMaterial({color: 0xff9900});
    material.transparent = true;
    material.opacity = 0.7;
    material.wireframe = true;

    const icosahedron = new THREE.Mesh(geometry, material);
    this.icosahedron = icosahedron;
    this.three.createScene(this.canvas);
    this.three.scene.add(icosahedron);
    this.three.animate();
    // @todo: load nodes from server (ws connection?)
    // @hack: I can make any request to any server,
    // using img/script/iframe XSS technics, but it's not XSS, it's for good.
  }
  private onKeyFrame(): void {
    const o = this.utils.cp.dtc !== 0 ? this.utils.cp.dtc / 10000 : 0.01;
    this.icosahedron.rotation.x += o;
    this.icosahedron.rotation.y += o;
    this.o = o;
  }

}
