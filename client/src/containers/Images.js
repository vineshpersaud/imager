import React,{Component} from 'react';
import {connect} from 'react-redux';

import {getImages} from '../actions/images';
import {deleteImage} from '../actions/images';
import ImageCard from '../components/ImageCard';

class Images extends Component {

  componentDidMount() {
    this.props.getImages()
  }

  handleDelete = (e) => {
    this.props.deleteImage(e)
  }



  render(){
    return (
      <div className="ImagesContainer">
        <h1>Images</h1>
        {this.props.images.map(image =>  <ImageCard  key={image.id} image={image}
          button=<button onClick={() => {this.handleDelete(image)}}>Delete</button>
            />)}
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    images: state.images
  })
}

  export default connect(mapStateToProps, {deleteImage,getImages})(Images);
