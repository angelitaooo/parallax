import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { ExampleComponent } from './example/example.component';
import { PictureComponent } from './picture/picture.component';
import { NewParallaxComponent } from './new-parallax/new-parallax.component';
import { NewParallaxFinalComponent } from './new-parallax-final/new-parallax-final.component';
import { ServicesParallaxComponent } from './services-parallax/services-parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    ExampleComponent,
    PictureComponent,
    NewParallaxComponent,
    NewParallaxFinalComponent,
    ServicesParallaxComponent
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
      },
      {
        path: 'new-parallax-final',
        component: NewParallaxFinalComponent
      },
      {
        path: 'services-parallax',
        component: ServicesParallaxComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
