import React from 'react';

const ImageCard = ({ image }) => (
  <div key={image.id} className="ImageCard">
    <h3>{image.title}</h3>
    <h3>{image.description}</h3>
    <div>
      <img src={"http://localhost:3000"+image.image} alt={image.description}/>
      </div>
  </div>
)

export default ImageCard;
