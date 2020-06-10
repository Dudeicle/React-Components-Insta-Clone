// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";


const CommentSection = props => {
  // Add state for the comments


console.log("comment section", props)

  // if(!props.comments){
  //   return <div>No Comments</div>
  // }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(comment => {
        return <Comment key={comment.username} comment={comment} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
