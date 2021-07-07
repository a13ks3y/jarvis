import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XorComponent } from './xor/xor.component';
import {FormsModule} from '@angular/forms';
import { CliComponent } from './cli/cli.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.service';
import { NodesComponent } from './nodes/nodes.component';
import { MindComponent } from './mind/mind.component';
import { CypherComponent } from './cypher/cypher.component';
import { DualityComponent } from './duality/duality.component';
import { MatrixComponent } from './matrix/matrix.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { WikiComponent } from './wiki/wiki.component';

@NgModule({
  declarations: [
    AppComponent,
    XorComponent,
    CliComponent,
    HomeComponent,
    NodesComponent,
    MindComponent,
    CypherComponent,
    DualityComponent,
    MatrixComponent,
    YoutubeComponent,
    WikiComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }