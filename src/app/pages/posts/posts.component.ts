import { Component, OnInit, signal } from '@angular/core'
import { PostsService } from '../../services/posts-service.service'
import { Post } from '../../model/post.type'
import { PostListComponent } from "../../components/post-list/post-list.component";


@Component({
  selector: 'app-posts',
  imports: [PostListComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  constructor (private postsService: PostsService) {}

  posts: Array<Post> = []
  isLoading = signal(true)
  ngOnInit (): void {
    this.postsService.fetchPosts() .subscribe(posts => {
      this.posts = posts
      this.isLoading.set(false)
    })
  }
}
