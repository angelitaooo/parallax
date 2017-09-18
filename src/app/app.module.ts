import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { ExampleComponent } from './example/example.component';
import { PictureComponent } from './picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    ExampleComponent,
    PictureComponent
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
