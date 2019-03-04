import React from 'react';
import './ImageCard.css';
import { deleteImage } from '../actions/images';



const ImageCard = ({ image }) => (
  <div key={image.id} className="ImageCard">
    <h3>{image.title}</h3>
    <h3>{image.description}</h3>
    <div>
      <img src={"http://localhost:3000"+image.url} alt={image.description}/>
        <button onClick={() => {deleteImage(image.id)}}>Delete</button>
      </div>
  </div>
)
export default ImageCard;
// <button onClick={this.handleDelete.bind(image.id)}>Delete</button>
