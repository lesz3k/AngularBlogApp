import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommonService {

    private postItem;

    constructor(private http: Http){
         this.http=http;
    }

    setPost(post) {
        this.postItem = post;
    }

    unSetPost() {
        this.postItem = null;
    }

    getPost() {
        console.log(this.postItem)
        return this.postItem;
    }


}
