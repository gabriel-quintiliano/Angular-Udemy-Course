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
        /* What's the logic bellow?
         *
         * As this is very simple app, and we see that by the initialization of this component
         * all posts from db are fetched (via `this._fetchPosts()`) and we also know that
         * AppComponent is the only via which a post can be added, we can, at the same time we're
         * creating and sending the new post to db, safely add this same post to the `loadedPost`
         * property, which will trigger the updating of the template to show this newly added post
         * 
         * Maybe a more responsable (though a bit less efficient) way to do the same would be to
         * use the post's id returned by the Observable returned by <HttpClient>.get() method within
         * <PostsService>.createAndStorePost() to fetch this single post with this id */
        
        this.postsService.createAndStorePost(postData)
        .subscribe(responseData => {
            this.loadedPosts.push({id: responseData.name, ...postData});
        });
    }
  
    onFetchPosts() {
        // Calls private method `fetchPosts` to send a Http GET request
        this._fetchPosts();
    }
  
    onClearPosts() {
        // Send Http DELETE request
        this.postsService.deleteAllPosts()
        this.loadedPosts = []
    }

    private _fetchPosts() {
        this.isFetching = true;

        this.postsService.fetchPosts()
        .subscribe(posts => {
            if (posts) {
                this.loadedPosts = posts;
            }
            this.isFetching = false;
        })
    }
}
