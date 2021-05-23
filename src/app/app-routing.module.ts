import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MindComponent } from './mind/mind.component';
import { NodesComponent } from './nodes/nodes.component';
import {XorComponent} from './xor/xor.component';
import {CypherComponent} from "./cypher/cypher.component";

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
