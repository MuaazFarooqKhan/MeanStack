import { Component } from '@angular/core';
import { Post } from './components/Posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mean Stack';
  storedPost : Post[] =[];
  onPostAdded(post){
    this.storedPost.push(post)
  }
}
