import { postData } from "../raw-data/post-data";
import { useState } from "react";

function Posts() {

  const [postList, setPostList] = useState(postData);

  
  function likePost(importIndex) {
    const newPostList = [...postList];
    newPostList[importIndex].likes = newPostList[importIndex].likes + 1;
    setPostList(newPostList);

  }

  function dislikePost(importIndex) {
    const newPostList = [...postList];
    if (newPostList[importIndex].likes > 0) {
      newPostList[importIndex].likes  = newPostList[importIndex].likes - 1;
    }
    setPostList(newPostList);
  }

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list"></div>
      {postList.map((item, index) => (
        <div  key={index}  class="post-item">
          <div class="post-header">
            <h2>{item.title} #{item.id}</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{item.likes}</span>
            </div>
          </div>
          <p class="post-content">
           {item.content}
          </p>
          <div class="post-actions">
            <button onClick={()=>likePost(index)} class="like-button">Like</button>
            <button onClick={()=>dislikePost(index)} class="dislike-button">Dislike</button>
          </div>
        </div>))}

    </div>
  );
}

export default Posts;
