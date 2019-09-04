import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private postService: PostsService,
    private router: Router) { }

    ngOnInit() {
    }

  onSubmit(form : NgForm) {
    const newPost = new Post(
      form.value['title'],
      form.value['content'],
      form.value['loveIts'],
      form.value['created_at']
    );
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
