import React from 'react';

const ImageCard = ({ image }) => (
  <div key={image.id} className="ImageCard">
    <h3>{image.title}</h3>
  </div>
)

export default ImageCard;
