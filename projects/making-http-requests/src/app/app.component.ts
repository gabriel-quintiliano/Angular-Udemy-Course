import { Component, OnInit } from '@angular/core';
import { Post, PostData } from './models/post.model';
import { PostsService } from './services/posts.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedPosts: Post[] = [];
    isFetching = false;

    constructor(private postsService: PostsService) {}

    ngOnInit() {
        this._fetchPosts();
    }

    onCreatePost(postData: PostData) {
        this.postsService.createAndStorePost(postData);
    }
  
    onFetchPosts() {
        // Calls private method `fetchPosts` to send a Http GET request
        this._fetchPosts();
    }
  
    onClearPosts() {
        // Send Http request
    }

    private _fetchPosts() {
        this.isFetching = true;

        this.postsService.fetchPosts()
        .subscribe(posts => {
            this.loadedPosts = posts;
            this.isFetching = false;
        })
    }
}
