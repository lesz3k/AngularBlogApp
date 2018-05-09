import { Component, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { BlogListService } from './blog-list.service';
import { Post } from '../models/post.model';

@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['blog-list.component.css'],
  providers: [ BlogListService ]
})
export class BlogListComponent implements AfterContentInit {

  public posts;
  public dbPosts;
  public tags;


  constructor(private blogListService: BlogListService) {

  }

  ngAfterContentInit(){
    this.getAllPost();
  }

  getAllPost(){
    this.blogListService.getAllPost().subscribe(result => {
        let allPosts = JSON.parse(result['_body'])
        this.posts = allPosts;
        this.dbPosts = allPosts;
        console.log(allPosts)
    });
  }

}
