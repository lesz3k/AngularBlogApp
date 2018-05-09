import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { RootComponent } from './root/root.component';
import { ROUTING } from './app.routing';
import { BlogListComponent } from './blog-list/blog-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { CommonService } from './service/common.service';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    RootComponent,
    BlogListComponent,
    SinglePostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }
