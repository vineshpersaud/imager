import React from 'react';
import './CommentCard.css'


const CommentCard = ({ comment }) => (
  <div key= {comment.id} className='comment'>
    <p>{comment.username}</p>
    <h3>{comment.text}</h3>
  </div>
)
export default CommentCard;
