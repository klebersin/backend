import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[];
  post: Post;

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(
        res => this.posts = res,
        err => console.log(err)
      );
  }

  selectPost(id: string): void {
    this.postService.getPost(id)
      .subscribe(
        res => {
          this.postService.selectedPost = res,
          console.log(this.postService.selectedPost);
        },
        err => console.log(err)
      );
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(
        res => {
          this.getPosts();
        },
        err => console.log(err)
      );
  }

}
