import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostService } from '../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post = {
    name: '',
    description: '',
    creator: '',
  };

  edit = false;

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.postService.getPost(params.id)
        .subscribe(
          res => {
            this.post = res;
            this.edit = true;
          }
        );
    }
  }

  submitPost() {
    this.postService.createPost(this.post)
      .subscribe(
        res => {
          this.router.navigate(['/']);
        },
        err => console.log(err)
    );
  }

  updatePost() {
    delete this.post.createdAt;
    this.postService.updatePost(this.post._id, this.post)
      .subscribe(
        res => {
          this.router.navigate(['/']);
        }
      );
  }

}
