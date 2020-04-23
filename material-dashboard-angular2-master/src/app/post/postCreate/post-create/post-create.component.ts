import { Component, OnInit,EventEmitter, Output } from '@angular/core';
// import {Post}from '../../postCreate/post/post.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post/post.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from '../post/post.model';
import {miniType}from './mini-type.validators'
import { from } from 'rxjs';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  // helloWorld ='helloWorld';
  fileData:File = null;
  previewUrl:any =null;
  post:Post;
  isLooding = false
  enterContent ='';
  enterTitle ='';
  imagePreview:string;
  private mode = 'create';
  private postId :string;
  Form:FormGroup
//  @Output() postCreate =new EventEmitter<Post>();
  // entervalue = '';
  constructor(public postservices:PostService, public route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  this.Form = new FormGroup({
  'title':new FormControl(null,{validators:[Validators.required,Validators.minLength(4)]}),
  
  'content':new FormControl(null,{validators:[Validators.required]}),

  'image' :new FormControl(null,{validators:[Validators.required],asyncValidators:[miniType]})
})
console.log(this.Form)
    this.route.paramMap.subscribe((parmMaps:ParamMap)=>{
      if(parmMaps.has('postId')){
        this.mode ='edit';
        this.postId =parmMaps.get('postId');
        this.isLooding = true
    this.postservices.getPosts(this.postId).subscribe(postData =>{
      this.isLooding = false;
      this.post = {id:postData._id,title:postData.title,content:postData.content};
      
    this.Form.setValue({
      'title':this.post.title,
      'content':this.post.content
    })
    })
      }
      else{
        this.mode='create'
        this.postId = null;
      }
    })
    
  }
  onAddPost(){
    if(this.Form.invalid){
      return
    }
    this.isLooding =true
    if(this.mode ==='create'){
      this.postservices.addPost(this.Form.value.title,this.Form.value.content).subscribe((response)=>{
        this.router.navigate(['/postlist'])
        console.log(response);
        
        // this.updatePost.next([...this.post])
      
        // this.post.push(post);
        // this.updatePost.next([...this.post])
      })
    }else{
      this.postservices.updatedPost(this.postId,this.Form.value.title,this.Form.value.content)
    }
    // const post:Post ={ title:form.value.title, content:form.value.content }
    // console.log(postInput)
    // this.postCreate.emit(post)
   
    this.Form.reset();
    // alert('hello world');
    // this.helloWorld="hello World hy i am sadique shafi from katihar";
    // this.helloWorld = this.entervalue.

  }
  onImagePicker(event:Event){
    // fileInput:any
    // this.fileData =<File>fileInput.target.files[0]
    // this.preview()
    
    const events = (event.target as HTMLInputElement).files[0];
    this.Form.patchValue({image:File});
    this.Form.get('image').updateValueAndValidity()
    // console.log(events);
    // console.log(this.Form)
    const render = new FileReader();
    render.onload =()=>{
      this.imagePreview = render.result as string;
    }
    render.readAsDataURL(events)
  }
  preview(){
    var minitype = this.fileData.type
    if(minitype.match(/image\/*/)==null) {
      return
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData)
    reader.onload = (_event)=>{
      this.previewUrl =reader.result
    }
  }
}
