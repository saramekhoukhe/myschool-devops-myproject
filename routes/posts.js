const express = require ('express');
const { remove } = require('../models/Post');
const router = express.Router();
const Post = require ('../models/Post'); 
//CRUD Operations
//Get all posts
router.get('/', async (req,res)=> {
 try{
const posts = await Post.find();
res.json(posts);
 }
 catch(err){
    res.json({message: err});
 }
} ); 

//Submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        username: req.body.username,
        userInfos: req.body.userInfos
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);}
        catch(err){
            res.json({message: err});

        }
       
})

//Get specific post
router.get('/:postId', async (req,res) => {
    try{
    const post = await Post.findById(req.params.postId)
    res.json(post);}
    catch(err){
        res.json({message: err})
    }
})

//Delete post
router.delete('/:postId', async (req,res) => {
    try {
 const removedPost = await Post.remove({_id: req.params.postId})
 res.json(removedPost);  
}
    
    catch (err){
        res.json({message: err});
    }
}) 

//Update post
router.patch('/:postId', async (req,res) => {
    try {
 const updatedPost = await Post.updateOne(
    {_id: req.params.postId},
        {$set: { userInfos: req.body.userInfos }}
);

 res.json(updatedPost);  
 }
    
    catch (err){
        res.json({message: err});
    }
}) 



module.exports = router;