import { Injectable } from '@angular/core'
import { Post } from './post.model'


@Injectable({providedIn: 'root'})
export class PostService{
    private posts: Post[]=[];

    getPosts(){
        return this.posts;
    }
    addPost(title: String,content: String){
        const post: Post ={title:title,content: content};
        this.posts.push(post);
    }
}