import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MindComponent } from './mind/mind.component';
import { NodesComponent } from './nodes/nodes.component';
import {XorComponent} from './xor/xor.component';
import {CypherComponent} from './cypher/cypher.component';
import {DualityComponent} from './duality/duality.component';
import { MatrixComponent } from './matrix/matrix.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
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
