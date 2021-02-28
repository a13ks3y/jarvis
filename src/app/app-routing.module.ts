import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodesComponent } from './nodes/nodes.component';
import {XorComponent} from "./xor/xor.component";

const routes: Routes = [{
  path: 'xor',
  component: XorComponent
},{
  path: 'nodes',
  component: NodesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
