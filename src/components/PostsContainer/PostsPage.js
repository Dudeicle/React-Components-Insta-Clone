//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyPosts from '../../dummy-data';

const PostsPage = (props) => {
  // set up state for your data
  const [postData, setpostData] = useState(dummyPosts)

  

  return (
    <div className="posts-container-wrapper">
      {postData.map(socialMediaPost => {
        return <Post key={socialMediaPost.username} post={socialMediaPost} />
      })}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;
