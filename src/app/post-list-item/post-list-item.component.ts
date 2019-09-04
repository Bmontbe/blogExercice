import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor(private postsService : PostsService) { }

  ngOnInit() {
  }

  addLike () {
    this.loveIts=this.loveIts+1
    console.log(this.loveIts)
  }

  lessLike () {
    this.loveIts=this.loveIts-1
    console.log(this.loveIts)
  }

  delete(post: Post) {
    this.postsService.deletePost(post);
  }
}
