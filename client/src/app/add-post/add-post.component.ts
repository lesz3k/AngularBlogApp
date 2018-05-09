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

  @ViewChild('openModal') openModal: ElementRef;
  public post : Post;
  tags = tags;
  checkedList = [];

  constructor(private addPostService: AddPostService) {
      this.post = new Post();
  }

  addPost() {
    if(this.post.title && this.post.description && !(this.checkedList.length == 0)){
        this.post.tags = this.checkedList;
        this.post.date = new Date().toLocaleString();
        //console.log(this.post.tags)
        this.addPostService.addPost(this.post)
        .subscribe(res =>{
            console.log('response is ', res)
        })
        this.openModal.nativeElement.click();
    } else {
        alert('Title, Description and Tags required');
    }
  }

  onCheckboxChange(option, event) {
    if(event.target.checked) {
        //console.log(event.target.value);
        this.checkedList.push(event.target.value)
      }
      else {
        this.checkedList = this.checkedList.filter(e => e !== event.target.value);
      }
    }

}
