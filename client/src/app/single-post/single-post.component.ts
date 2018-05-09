import { Component, AfterContentInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { BlogListService } from '../blog-list/blog-list.service';
import { CommonService } from '../service/common.service';

@Component({
  moduleId: module.id,
  selector: 'app-single-post',
  templateUrl: 'single-post.component.html',
  styleUrls: ['./single-post.component.css'],
  providers: [ BlogListService ]
})
export class SinglePostComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;

  public postItem;

  constructor(private blogListService: BlogListService, private commonService: CommonService, private router: Router) {

  }

  ngOnInit(){
    this.postItem = this.commonService.getPost()
  }

  deletePost(){
    this.blogListService.deletePost(this.postItem._id).subscribe(res => {
      this.closeBtn.nativeElement.click();
      this.router.navigate(['/']);
    })
  }

}
