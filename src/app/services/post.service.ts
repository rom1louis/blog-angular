import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PostService {

  postsSubject = new Subject<any[]>();
  dateJour = new Date();
  private posts = [
  	{
      id: 1,
      title : 'angularJS ',
      content : "AngularJS est un framework JavaScript libre et open source développé par Google. Il permet de développer des pages web. ",
      loveIts : 3,
      created_at : 'Feb 02, 2018'
    },
    {
      id: 2,
      title : "Swift ",
      content : "Swift est un langage de programmation compilé multi-paradigmes développé par la société Apple. Il est destiné à la programmation d'applications sur les systèmes d'exploitation iOS, macOS, watchOS, tvOS ainsi que Linux. ",
      loveIts : -3,
      created_at : 'Jun 15, 2015'
    },
    {
      id: 3,
      title : "langage C ",
      content : "C est un langage de programmation impératif généraliste. Inventé au début des années 1970 pour réécrire UNIX, C est devenu un des langages les plus utilisés ",
      loveIts : 0,
      created_at : this.dateJour
    }
  ];


  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  createNewPost(title: string, content: string) {
    const post = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: this.dateJour
    };
    post.title = title;
    post.content = content;
    if (this.posts.length == 0){
      post.id = 0
    }else {
      post.id = this.posts[this.posts.length - 1].id + 1;
    }
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(id: number){
    this.posts.splice(id, 1);
    this.emitPosts();
  }

  likePost(id: number){
    this.posts[id].loveIts ++;
    this.emitPosts();
  }

  dislikePost(id: number){
    this.posts[id].loveIts --;
    this.emitPosts();
  }
}
