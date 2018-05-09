import { Component, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { BlogListService } from './blog-list.service';

@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['blog-list.component.css'],
  providers: [ BlogListService ]
})
export class BlogListComponent implements AfterContentInit {

  public posts;

  constructor(private blogListService: BlogListService) {

  }

  ngAfterContentInit(){


  }

  getAllPost(){

  }

}
