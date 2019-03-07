import React from 'react';
import { Route } from 'react-router-dom';



const CommentCard = ({ comment }) => (


  <div >
    <p>{comment.username}</p>
    <h3>{comment.text}</h3>
  </div>
)
export default CommentCard;
