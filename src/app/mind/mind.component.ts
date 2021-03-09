import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { ThreeService } from '../three.service';
// It's many to many connections between words... But...
class Word {
  constructor(value: string) {
    this.value = value;
    console.log(value);
    this.mesh = new THREE.Mesh(Word.geometry, Word.material);
    this.mesh.position.x += Math.sin(Word.counter) * 9;
    this.mesh.position.y += Math.cos(Word.counter ) * 3;
    const fontGeometry = new THREE.TextGeometry(this.value, Word.fontOptions);

    this.valueMesh = new THREE.Mesh(fontGeometry, Word.valueMaterial);
    this.valueMesh.position.x = this.mesh.position.x - 0.5;
    this.valueMesh.position.y = this.mesh.position.y - 0.5;
    this.valueMesh.position.z = this.mesh.position.z;

    Word.scene?.add(this.mesh);
    Word.scene?.add(this.valueMesh);
    Word.counter ++;
  }
  static counter = 0;
  // @hack: @todo: refactor
  public static scene: THREE.scene;
  public static material = new THREE.MeshBasicMaterial(0xff9900);
  public static valueMaterial = new THREE.MeshBasicMaterial(0xff9900);
  public static geometry = new THREE.IcosahedronGeometry(3);
  static fontOptions: any = {
    font: null,
    size: 1,
    height: 0.0666,
    curveSegments: 12,
  };

  private readonly value: string;
  private index: number;
  private readonly mesh: THREE.Mesh;
  valueMesh: any;
  private words: Word[] = [];

  add(word: string): void {
    this.words.push(new Word(word));
  }
}

@Component({
  selector: 'the-mind',
  templateUrl: './mind.component.html',
  styleUrls: ['./mind.component.less']
})
export class MindComponent implements OnInit {
  public me: Word;

  @ViewChild('ctx', {static: true})
  public canvas: ElementRef<HTMLCanvasElement>;

  constructor(private http: HttpClient, private three: ThreeService) {
    const material = Word.material;
    material.transparent = true;
    material.opacity = 0.7;
    material.wireframe = true;
  }

  ngOnInit(): void {

    this.three.createScene(this.canvas);
    this.three.animate();
    Word.scene = this.three.scene;

    const loader = new THREE.FontLoader();

    loader.load( '/assets/Bitwise_Regular.json', ( font ) => {
      Word.fontOptions.font = font;
      this.me = new Word('me');
      this.me.add('you');
      this.me.add('they');
      this.me.add('YES');
      this.me.add('no');
      let rotation = 0;
      let direction = 1;
      const camera = this.three.camera;
      const scene = this.three.scene;
      this.three.onKeyFrame = () => {
        rotation += 0.05 * direction;
        if (rotation >= 66.6) { direction = -1; }
        if (rotation < 0) { direction = 1; }
        camera.position.x = 0;
        camera.position.y = Math.cos(rotation) * 8.75 + 16;
        camera.position.z = Math.sin(rotation) * 4.2 + 16;
        // camera.lookAt( scene.position ); // the origin
        camera.lookAt( this.me.valueMesh.position ); // the origin
      };
    });
/*
    console.time('download-words');
    this.http.get('/assets/words.txt', {
      responseType: 'text'
    }).subscribe((response) => {
      this.words = response.split('\n').map(w => w.toLowerCase());
      this.meIndex = this.words.findIndex(w => w === 'me');
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
*/
  }

}
