import React from 'react';
import { Route } from 'react-router-dom';



const CommentCard = ({ comment }) => (


  <div >
    <h3>{comment.username}</h3>
    <h3>{comment.text}</h3>
  </div>
)
export default CommentCard;
