const express = require('express')
const router = express.Router()
const Post = require('../models/post');



// constructor(collection){
//     //Mongoose DB Connection
//     mongoose.Promise = global.Promise;
   
//     this.collection = collection
// }

router.post("",(req,res,next)=>{
    const post =new Post({
        title: req.body.title,
        content:req.body.content
    })
    post.save();
    
    res.status(201).json({message:"post added successfully"})
    // const post = req.body;
    // console.log(post);
    // res.status(201).json({message:"post added successfully"})
    // const posts=new Post({
    //     title:req.body.title,
    //     content:req.body.content
    // })
    // console.log(posts);
    // res.status(201).json({message:"post added successfully"})
    
})
// router.use((req,res,next)=>{
//     console.log("first middlewere");
//     next();
// })

// router.post('/api/post',(req,res,next)=>{
//     console.log()
// })

router.get('',(req,res,next)=>{
//    res.send("hello for express");
 Post.find().then(document =>{
    res.status(200).json({
        message:'post message fetch successfully',
        post:document
    })
 })


// const post =[
//     {id:'sa124ds2',title:'first Title',content:'this is coping from first title'},
//     {id:'sa124ds3',title:'second Title',content:'this is coping from second title'},
//     {id:'sa124ds4',title:'third Title',content:'this is coping from third title'},
// ]s
})
router.get('/:id',(req,res,next)=>{
    Post.findById(req.params.id).then(post =>{
        if(post){
            res.status(200).json(post)
        }
        else{
            res.status(404).json({message:'Port Not Found!'})
        }
    })
})


router.put('/:id',(req,res,next)=>{
    const post = new Post({
        id:req.body.id,
        title:title,
        content:content
    });
    posts.updateOne({_id:req.body.id},post).then(result=>{
        console.log(result);
        res.status(200).json({message:'updatesuccessfully'})
    })
})

router.delete('/:id',(req,res,next)=>{ 
    console.log("deleteing a video");

    Post.findByIdAndRemove(req.params.id,function(err,deletefile){
        if(err){
            res.send("Error Comes")
        }else{
            res.json(deletefile)
        }
    })
    // const post =new Post({
    //     title: req.body.title,
    //     content:req.body.content
    // })
    // let id = req.params.id 
    // console.log("==="+req.params.id)

//    Post.deleteOne({  "title" : "sdique" }.then(result=>{
//         console.log(result);
        
//     res.status(200).json({message:"postDeleted!"})  
//     }))
//  console.log(req.param.id); 
})

module.exports =router