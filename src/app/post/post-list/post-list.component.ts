import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  // posts=[
  //   {title:'First post', content:'this is first post'},
  //   {title:'Second post', content:'this is second post'},
  //   {title:'Third post', content:'this is third post'}
  // ]
  posts: Post[] = [];
  constructor( public postService: PostService) { }

  ngOnInit() {
    this.posts=this.postService.getPosts();
  }
 
}
