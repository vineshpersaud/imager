import React from 'react';
import './ImageShowCard.css';

const ImageShowCard = ({ image }) => (

    <div key={image.id} className="ImageShowCard">
      <h2>{image.title}</h2>
      <img
        src={"http://localhost:3000"+image.url}
        alt={image.description}
      />
    <h4>{image.description}</h4>
    </div>

)
export default ImageShowCard;
