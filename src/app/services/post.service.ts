import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable()
export class PostService {

  postsSubject = new Subject<any[]>();
  dateJour = new Date();
  private posts = [];
  HttpClient: any;


  constructor(private httpClient: HttpClient) { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  createNewPost(title: string, content: string) {
    const post = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: ''
    };
    post.title = title;
    post.content = content;
    if (this.posts.length == 0){
      post.id = 0
    }else {
      post.id = this.posts[this.posts.length - 1].id + 1;
    }
    post.created_at = this.dateJour.toString();
    this.posts.push(post);
    this.savePostsToServer();
    this.emitPosts();
  }

  removePost(id: number){
    this.posts.splice(id, 1);
    this.savePostsToServer();
    this.emitPosts();
  }

  likePost(id: number){
    this.posts[id].loveIts ++;
    this.savePostsToServer();
    this.emitPosts();
  }

  dislikePost(id: number){
    this.posts[id].loveIts --;
    this.savePostsToServer();
    this.emitPosts();
  }

  savePostsToServer() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getBooks() {
    firebase.database().ref('/posts')
    .on('value', (data) => {
      this.posts = data.val() ? data.val(): [];
      this.emitPosts(); 
    });
  }
}
