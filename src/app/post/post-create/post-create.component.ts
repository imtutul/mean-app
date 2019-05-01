import { Component,EventEmitter,Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PostService } from '../post.service';

@Component({
    selector:'app-post-create',
    templateUrl: './post-create.component.html'
}) 
export class PostCreateComponent{
    constructor( public postService: PostService) { }
    onAddPost(form: NgForm){
        if(form.invalid){
            return
        }
        else{
            this.postService.addPost(form.value.title,form.value.content);
        }
    }
}