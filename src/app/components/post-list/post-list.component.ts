import { Component, Input } from '@angular/core';
import { Post } from '../../model/post.type';
import { EllipsisDirective } from '../../directives/ellipsis.directive';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-post-list',
  imports: [EllipsisDirective, SpinnerComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  @Input() posts: Array<Post> = []
  @Input() isLoading = true;
  
}
