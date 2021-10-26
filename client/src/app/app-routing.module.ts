import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MindComponent } from './mind/mind.component';
import { NodesComponent } from './nodes/nodes.component';
import {XorComponent} from './xor/xor.component';
import {CypherComponent} from './cypher/cypher.component';
import {DualityComponent} from './duality/duality.component';
import { MatrixComponent } from './matrix/matrix.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { WikiComponent } from './wiki/wiki.component';
import {ViewComponent} from './view/view.component';
import {SoundComponent} from './sound/sound.component';

const routes: Routes = [
  {
    path: 'sound',
    component: SoundComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'wiki',
    component: WikiComponent
  },
  {
    path: 'youtube',
    component: YoutubeComponent
  },
  {
    path: 'matrix',
    component: MatrixComponent
  },
  {
    path: 'duality',
    component: DualityComponent
  },
  {
    path: 'xor',
    component: XorComponent
  },
  {
    path: 'nodes',
    component: NodesComponent
  },
  {
    path: 'mind',
    component: MindComponent
  },
  {
    path: 'cypher',
    component: CypherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
