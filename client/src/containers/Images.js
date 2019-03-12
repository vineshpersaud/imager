import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import {getImages} from '../actions/images';
import {deleteImage} from '../actions/images';
import ImageCard from '../components/ImageCard';
import ImageShow from './ImageShow';
import {likeImage} from '../actions/images';


class Images extends Component {

  componentDidMount() {
    this.props.getImages()
  }


  render(){
    return (
      <div className="ImagesContainer">
        <h1>Images</h1>
        {this.props.images.map(image =>
          <div>
          <ImageCard
            key={image.id}
            image={image}
            props= {this.props}
          />
          </div>
      )
        }
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    images: state.images
  })
}

  export default connect(mapStateToProps, {deleteImage,getImages,ImageShow,likeImage})(Images);
