import React,{Component} from 'react';
import {connect} from 'react-redux';

import {getImages} from '../actions/Images';
import ImageCard from '../components/ImageCard';

class Images extends Component {

  componentDidMount() {
    this.props.getImages()
  }


  render(){
      console.log(this.props.images)
    return (
      <div className="ImagesContainer">
        <h1>Images</h1>
        {this.props.images.map(image => <ImageCard key={image.id} image={image} />)}
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    images: state.images
  })
}

  export default connect(mapStateToProps, { getImages})(Images);
