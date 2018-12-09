import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

	postSubscription: Subscription;
	posts = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
		this.postSubscription = this.postService.postsSubject.subscribe(
			(posts: any[]) => {
				this.posts = posts;
			}
		);
		this.postService.getBooks();
		this.postService.emitPosts();
	}
	
	ngOnDestroy() {
		this.postSubscription.unsubscribe();
	}

}
