import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { ThreeService } from '../three.service';

class Word {
  // @hack: @todo: refacotor
  public static scene: THREE.scene;
  public static material = new THREE.MeshBasicMaterial(0xff9900);
  public static valueMaterial = new THREE.MeshBasicMaterial(0xff9900);
  public static geometry = new THREE.IcosahedronGeometry(3);

  private value: string
  private index: number
  private mesh: THREE.Mesh
  static fontOptions: any = {
    font: null,
    size: 1,
    height: 2,
    curveSegments: 12,
  };
  valueMesh: any;
  
  constructor(value: string, index: number = -1) {
    this.value = value;
    this.index = index;
    this.mesh = new THREE.Mesh(Word.geometry, Word.material);    
    const fontGeometry = new THREE.TextGeometry(this.value, Word.fontOptions);

    this.valueMesh = new THREE.Mesh(fontGeometry, Word.valueMaterial);
    this.valueMesh.position.x = this.mesh.position.x - 0.6;
    this.valueMesh.position.y = this.mesh.position.y - 0.2;
    this.valueMesh.position.z = this.mesh.position.z;

    Word.scene?.add(this.mesh);
    Word.scene?.add(this.valueMesh);
  }
}

@Component({
  selector: 'the-mind',
  templateUrl: './mind.component.html',
  styleUrls: ['./mind.component.less']
})
export class MindComponent implements OnInit {

  public words: string[] = [];
  public importantWords: Word[] = [];
  public meIndex: number

  @ViewChild('ctx', {static: true})
  public canvas: ElementRef<HTMLCanvasElement> 

  constructor(private http: HttpClient, private three: ThreeService) { 
    const material = Word.material;
    material.transparent = true;    
    material.opacity = 0.7;
    material.wireframe = true;
  }  

  ngOnInit(): void {
    console.time('download-words');
    this.http.get('/assets/words.txt', {
      responseType: 'text'
    }).subscribe((response) => {
      this.words = response.split('\n').map(w => w.toLowerCase());
      this.meIndex = this.words.findIndex(w => w == 'me');
      console.timeEnd('download-words');
      this.three.createScene(this.canvas);
      this.three.animate();
      Word.scene = this.three.scene;

      const loader = new THREE.FontLoader();

      loader.load( '/assets/Bitwise_Regular.json', ( font ) => {
        Word.fontOptions.font = font;
        this.importantWords.push(new Word('me', this.meIndex));
      });
    });
  }

}
