import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../models/post.model';
import { AddPostService } from './add-post.service';
import { tags } from '../common/tags';
import 'rxjs/Rx';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [ AddPostService ]
})
export class AddPostComponent {

  public post : Post;

  tags = tags;

  constructor(private addPostService: AddPostService) {
      this.post = new Post();
  }

  addPost() {

  }

  onCheckboxChange(option, event) {

  }

}
