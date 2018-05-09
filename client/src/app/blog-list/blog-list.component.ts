import { Component, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { BlogListService } from './blog-list.service';
import { Post } from '../models/post.model';
import { tags } from '../common/tags';

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
  public postToDelete;

  constructor(private blogListService: BlogListService) {

  }

  ngAfterContentInit(){
    this.getAllPost();
    let newTagsArr = tags.map((tag, i)=>{
      return {tag: tag, num: i, isClicked: 'no'}
    })
    this.tags = newTagsArr

  }

  getAllPost(){
    this.blogListService.getAllPost().subscribe(result => {
        let allPosts = JSON.parse(result['_body'])
        this.posts = allPosts;
        this.dbPosts = allPosts;
        console.log(allPosts)
    });
  }

  deletePost(){

  }

  setDelete(post: Post){
    this.postToDelete = post;
    console.log(this.postToDelete)
  }

  unsetDelete(){
    this.postToDelete = null;
  }

  sortByTags(tag) {
    
  }

}