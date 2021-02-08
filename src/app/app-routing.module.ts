import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {XorComponent} from "./xor/xor.component";

const routes: Routes = [{
  path: 'xor',
  component: XorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
