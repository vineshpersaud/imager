import React from 'react';


const ImageShowCard = ({ image,props }) => (

    <div key={image.id} className="ImageShowCard">
      <h3>{image.title}</h3>
      <h3>{image.description}</h3>
      <img
        src={"http://localhost:3000"+image.url}
        alt={image.description}
      />
    </div>

)
export default ImageShowCard;
