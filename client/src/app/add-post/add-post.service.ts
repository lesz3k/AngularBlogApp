import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from '../models/post.model';

@Injectable()
export class AddPostService {

    constructor(private http: Http){

    }

    addPost(post: Post){
      console.log(post.tags)
      return this.http.post('/api/post/createPost',{
          title : post.title,
          description : post.description,
          tags: post.tags,
          date: post.date
      })
    }

}
