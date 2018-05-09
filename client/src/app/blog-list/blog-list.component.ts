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

  sortByTags(thisTag){
    let newArr = this.dbPosts.filter(post =>
      (post.tags.includes(thisTag.tag)) ? post : null
    )
    if (thisTag.isClicked == 'no'){
      this.tags = this.tags.map(elem=>{
        (elem.tag == thisTag.tag) ? elem.isClicked = 'yes' : elem.isClicked = 'no'
        return elem
      })
    }
    else {
      this.tags = this.tags.map(elem=>{
        (elem.tag == thisTag.tag) ? elem.isClicked = 'no' : null
        return elem
      })
    }
    //check if all tags are unclicked and reload the full blog list
    let allPostsTags = this.tags.map((tag)=>{
      return tag.isClicked
    })
    if(allPostsTags.indexOf('yes') != -1){
        this.posts = newArr;
    } else{
      this.posts = this.dbPosts
    }

  }

}
