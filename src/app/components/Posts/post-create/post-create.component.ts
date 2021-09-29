import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle =''
  enteredContent='No Content'
  @Output() postCreated = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(postForm:NgForm){
    if(!postForm.valid){
      return;
    }
    const posts:Post ={
      title : postForm.value.title,
      content : postForm.value.content
    }
    this.postCreated.emit(posts)
  }

}
