import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //    {title: 'First Post', content: 'this is first post'},
  //    {title: 'Second Post', content: 'this is second post'},
  //    {title: 'Third Post', content: 'this is Third post'}
  // ]


  @Input() posts: Post[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
