import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BASE_URL = 'http://localhost:3000';
  selectedPost: Post = {
    name: '',
    description: '',
    creator: '',
  };

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/post`);
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/post/${id}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.BASE_URL}/post`, post);
  }

  deletePost(id: string): Observable<Post> {
    return this.http.delete<Post>(`${this.BASE_URL}/post/${id}`);
  }

  updatePost(id: string, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.BASE_URL}/post/${id}`, post);
  }

}
