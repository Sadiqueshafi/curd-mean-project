import { Injectable } from '@angular/core';
import {Post}from './post.model';
import { importType } from '@angular/compiler/src/output/output_ast';
import {Subject}from 'rxjs'
import {HttpClient} from '@angular/common/http';
import{map} from 'rxjs/operators'
import { Router } from '@angular/router';
import{Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PostService {
 private post:Post[]=[];
 private updatePost =new Subject<Post[]>();
  constructor(private http:HttpClient,private router:Router) { }
  getPost(){
      return this.http.get<{message:string,post:any}>('http://localhost:3000/api/post').pipe(map((postData=>{
      return postData.post.map(post =>{
        return{
          title:post.title,
          content:post.content,
          id:post._id
        }
      })
      })))}
      
      // .subscribe((PostData)=>{
      // console.log(PostData);
      // console.log(JSON.stringify(PostData));
      // // console.log(JSON.stringify(PostData.posts[0]));
      // // for(var i=0; i<PostData.posts.length;i++){
      // //   var r = PostData.posts[i];
      //   // console.log(r)
      // // }
      // // this.post= PostData.posts;
      // // console.log(this.posts);
      // this.updatePost.next([...this.post])


  //   })
  // }
  // getPostupdetListner(){
  //   return this.updatePost.asObservable()
  // }
  addPost(title:string,content:string){
    const post:Post = {id:"sadki",title:title,content:content}
    return this.http.post<{message:string}>('http://localhost:3000/api/post',post);
    console.log(post)

  }
getPosts(id:string){
  // return {...this.post.find(p =>p.id === id)}
  return this.http.get<{_id:string,title:string,content:string}>('http://localhost:3000/api/post/'+id)
}

updatedPost(id:string,title:string,content:string){
  const Post: Post = {id:id,title:title, content:content}
  this.http.put('http://localhost:3000/api/post/'+ id,this.post ).subscribe(response=>{
    console.log(response)
    const updatePost = [...this.post]
    const oldPostIndex =updatePost.findIndex(p=> p.id === Post.id)
    updatePost[oldPostIndex]=Post;
    this.post =updatePost
    this.updatePost.next([...this.post])
    this.router.navigate(['/'])
  })
}

  deletePost(postId:string): Observable<any>{
    return this.http.delete('http://localhost:3000/api/post/'+ postId );
    // this.http.delete('http://localhost:3000/api/post/'+ postId ).subscribe(()=>{
    //   console.log('ABCD');
    //   const updatedelte =this.post.filter(post =>postId !== postId);
    //   this.post =updatedelte
    //   this.updatePost.next([...this.post])
    // })
  }
}
