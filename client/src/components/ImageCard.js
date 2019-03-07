import React from 'react';
import './ImageCard.css';
import { Route } from 'react-router-dom';
import { deleteImage } from '../actions/images';
import ImageShow from '../containers/ImageShow.js'
import { Link } from 'react-router-dom';



const ImageCard = ({ image,props }) => (


  <div key={image.id} className="ImageCard">

    <h3>{image.title}</h3>
    <h3>{image.description}</h3>


      <Link to={`/images/${image.id}`}>
        <img src={"http://localhost:3000"+image.url} alt={image.description}/>
      </Link>


    <p><button onClick={() => {props.deleteImage(image)}}>Delete</button></p>

  </div>
)
export default ImageCard;
