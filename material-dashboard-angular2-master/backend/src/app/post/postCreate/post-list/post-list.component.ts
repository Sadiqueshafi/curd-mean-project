import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import{Post}from '../post/post.model';
import {Response} from '../post/post.model';
import { Subscription, concat } from 'rxjs';
import { PostService } from '../post/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit ,OnDestroy{
  
  // post=[
  //   {title:'first sadique post',content:'hello this is sadique from katihar'},
  //   {title:'second sadique post',content:'hello this is sadique from lucknow'},
  //   {title:'third sadique post',content:'hello this is sadique from bengulur'},
  // ]
  temparray1:any =[]
  newJsonObject:any;
  post = [];
  postSubscribe:Subscription;
  isLoadding =false;
  constructor(public postServices:PostService) { }

  ngOnInit(): void {
   this.postServices.getPost();
   this.isLoadding =true;
   this.postServices.getPost().subscribe(transformdata => {
     this.isLoadding =false
     this.post =transformdata
     const response= transformdata;
     console.log(response);
     console.log(JSON.stringify(response));

      //  for (let i = 0; i < response.post.length; i++) {
      //    this.post.push(response.post[i]);
        // console.log(a)
      //  console.log(response.post[i]);

      //  this.temparray1 = response.post[i];
      //  console.log('***',Object.entries(tempArray));
       
      //  this.temparray1 = Object.entries(tempArray);
      //  console.log(this.temparray1)
      //  var d  = [];
      //  var d  = d.concat(tempArray1);
      //  console.log('###################',d);

       
      // let tempArray = response.post[i];
      // tempArray.push(this.post);

    // }
    // console.log(this.post);

   },
   error => {
     console.log("error comes")
   })
    // this.postSubscribe=this.postServices.getPostupdetListner().subscribe((posts:Post[])=>{
    //   this.post= posts;
    //   console.log(this.post);
    //   console.log(JSON.stringify(this.post));
    // })
  }
  deletedpost(postId:string){
    // let deleteBody = 'Testing Delete Function'
    this.postServices.deletePost(postId).subscribe((data) => {
      console.log(data)
    console.log('Deleted Successfully');
    }, (error) => {
      console.log('Failed to Delete');

    });
  }
  
  ngOnDestroy(){
    // this.postSubscribe.unsubscribe();
  }

}
