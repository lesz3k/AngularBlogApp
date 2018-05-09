import { Component, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { BlogListService } from './blog-list.service';
import { Post } from '../models/post.model';
import { tags } from '../common/tags';
import { CommonService } from '../service/common.service';

@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['blog-list.component.css'],
  providers: [ BlogListService ]
})
export class BlogListComponent implements AfterContentInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;

  public posts;
  public dbPosts;
  public tags;
  public postToDelete;

  constructor(private blogListService: BlogListService, private commonService: CommonService) {

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
    this.blogListService.deletePost(this.postToDelete._id).subscribe(res => {
      this.getAllPost();
      this.closeBtn.nativeElement.click();
    })
  }

  setDelete(post: Post){
    this.postToDelete = post;
    console.log(this.postToDelete)
  }

  unsetDelete(){
    this.postToDelete = null;
  }

  setPostItem(post: Post){
    this.commonService.getPost()
    this.commonService.setPost(post)
  }

  sortByTags(tag) {

  }

}
