import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Post, PostData } from './models/post.model';
import { PostsService } from './services/posts.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    loadedPosts: Post[] = [];
    isFetching = false;
    error?: string;
    @ViewChild('postForm') postForm!: NgForm;
    private errorSub!: Subscription;

    constructor(private postsService: PostsService) {}

    ngOnInit() {
        this._fetchPosts();
        this.errorSub = this.postsService.error.subscribe(errorMessage => {
            this.error = errorMessage;
        })
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
            this.postForm.reset()
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
        this.error = undefined;

        this.postsService.fetchPosts()
        .subscribe({
            next: posts => {
                if (posts) {
                    this.loadedPosts = posts;
                }
            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
                this.error = err.message;
            },
            complete: () => {
                // As the Observable completes after the request, regardless if it's successfull
                // or not, we set `isFetching` back t false here, as the request is over.
                this.isFetching = false;
            }
        });
    }

    ngOnDestroy() {
        this.errorSub.unsubscribe();
    }
}
