import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RootComponent } from './root/root.component';
import { ROUTING } from './app.routing';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [
    RootComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
