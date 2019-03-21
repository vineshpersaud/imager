import React from 'react';
import './ImageCard.css';
import { Route } from 'react-router-dom';
import { deleteImage } from '../actions/images';
import { likeImage } from '../actions/images';
import ImageShow from '../containers/ImageShow.js'
import { Link } from 'react-router-dom';



const ImageCard = ({ image,props }) => (
  <div key={image.id} className="ImageCard">
      <Link to={`/images/${image.id}`}>
        <img src={"http://localhost:3000"+image.url} alt={image.description}/>
      </Link>

      <h3>{image.title}</h3>
      <p>{image.description}</p>
      <ul>
        <li><a href="javascript:;" onClick={() => {props.likeImage(image)}} >&#8679; {image.likes}</a></li>
        <li>&#9993; {image.comments.length}</li>
        <li><button className="myButton" onClick={() => {props.deleteImage(image)}}>Delete</button></li>
      </ul>

  </div>
)
export default ImageCard;
