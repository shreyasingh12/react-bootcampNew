import React, { useState } from "react";

export default function Post() {
  const [post, setPost] = useState();
  const loadPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((res) => { const data = res
        setPost(data)});
  };
  return (
    <div>
      Post

      {post?
      <div>
        <p>ID : {post.id}</p>
        <p>UserId : {post.userId}</p>
        <p>TITLE : {post.title}</p>
        <p>BODY : {post.body}</p>
      </div>:null
      }
      <button onClick={loadPost}>Get Post</button>
      
      
    </div>
  );
}
