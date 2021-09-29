import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private post: Post[]=[]
  constructor() { }

  getPosts(){
    return [...this.post]
  }

}
