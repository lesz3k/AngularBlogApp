import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BlogListService {

    constructor(private http: Http){

    }

    getAllPost(){
      return this.http.post('/api/post/getAllPost',{})
    }


}
