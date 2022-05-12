import './styles.css';
import React, { useEffect, useState } from 'react';
import {getPosts, 
  createPost, 
  deletePost as deletePostapi,
  updatePost as updatePostapi} from '../api';

import PostComment from './PostComment';
import PostForm from './PostForm';

const Post = ({currentUserId}) => {

  const [posts, setPosts] = useState([])
  const [activePost, setActivePost]= useState(null)


  const rootPosts = posts.filter(
    (post)=> post.parentId === null
    );
    console.log(setPosts, "back end data");

    const getReplies = (postedId) =>{
      return posts.filter((post)=> post.parentId === postedId).sort((a,b)=> 
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )};

      const addPost = (text, parentId)=>{
        console.log(text, parentId);
        createPost(text, parentId).then((postc)=>{
          setPosts([postc, ...posts])
          setActivePost(null);
        })
      }

      const deletedPost = (postId)=>{
        if(window.confirm('Are you sure you want to delete this post?')){
          deletePostapi().then(()=>{
            const updatedposts = posts.filter(
              (postbc)=> postbc.id !== postId
            );
            setPosts(updatedposts)
          })
        }
      }

      const updatePost= (text, postId)=>{
        updatePostapi(text, postId).then(()=>{
          const updatedpostbc = posts.map(postbc =>{
            if(postbc.id === postId){
              return {...postbc, body: text}
            } return postbc
          })
          setPosts(updatedpostbc)
          setActivePost("")
        })
      }

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);
  

  return (
    <div className="posts">
      <h3 className="post__title">Facebook Post</h3>
      <div className="post__form__title">Write something</div>
      <PostForm submitLabel="Post" handleSubmit={addPost} />
      <div className="posts__container">
          {rootPosts.map((rootPost)=>(
            <PostComment key={rootPost.id} post={rootPost}
             replies={getReplies(rootPost.id)}
             currentUserId={currentUserId}
             deletedPost={deletedPost}
             updatePost={updatePost}
             activePost={activePost}
             setActivePost={setActivePost}
             addPost={addPost}
             />
             ))}
      </div>
    </div>
  )
}

export default Post;