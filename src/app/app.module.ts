import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { ExampleComponent } from './example/example.component';
import { PictureComponent } from './picture/picture.component';
import { NewParallaxComponent } from './new-parallax/new-parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    ExampleComponent,
    PictureComponent,
    NewParallaxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ExampleComponent
      },
      {
        path: 'website',
        component: WebsiteComponent
      },
      {
        path: 'picture',
        component: PictureComponent
      },
      {
        path: 'new-parallax',
        component: NewParallaxComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
