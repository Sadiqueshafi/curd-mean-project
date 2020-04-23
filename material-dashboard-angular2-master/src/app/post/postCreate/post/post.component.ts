import { Component, OnInit } from '@angular/core';
import { Post} from './post.model'
// import { from } from 'rxjs';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  storePost:Post[] =[];
  constructor() { }

  ngOnInit(): void {
  }
  onPostAdded(post){
    this.storePost.push(post);
  }
}
