import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from '../../models/post.model';

@Injectable()
export class AddPostService {

    constructor(private http: Http){

    }

    addPost(post: Post){
      
    }

}
