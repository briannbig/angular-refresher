import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Post } from '../model/post.type'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor (private httpClient: HttpClient) {
  }

  fetchPosts () : Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>(this.url)
  }

}
