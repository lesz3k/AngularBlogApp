import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from '../models/post.model';

@Injectable()
export class BlogListService {

    constructor(private http: Http){

    }

    getAllPost(){
      return this.http.post('/api/post/getAllPost',{})
    }

    deletePost(id){
      return this.http.post('/api/post/deletePost',{id : id})
    }


}
