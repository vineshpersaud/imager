import React from 'react';
import './ImageCard.css';
import { deleteImage } from '../actions/images';



const ImageCard = ({ image,button }) => (


  <div key={image.id} className="ImageCard">
    <h3>{image.title}</h3>
    <h3>{image.description}</h3>
    <div>
      <img src={"http://localhost:3000"+image.url} alt={image.description}/>
    </div>
    <p>{button}</p>
  </div>
)
export default ImageCard;
