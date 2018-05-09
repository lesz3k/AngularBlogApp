import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RootComponent } from './root/root.component';
import { ROUTING } from './app.routing';
import { BlogListComponent } from './blog-list/blog-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { CommonService } from './service/common.service';

@NgModule({
  declarations: [
    RootComponent,
    BlogListComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpModule
  ],
  providers: [CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }
