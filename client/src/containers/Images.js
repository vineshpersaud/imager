import React,{Component} from 'react';
import {connect} from 'react-redux';

import {getImages} from '../actions/images';
import ImageCard from '../components/ImageCard';

class Images extends Component {

  componentDidMount() {
    this.props.getImages()
  }

  handleDelete = (e) => {
    console.log(e)
  }



  render(){
    return (
      <div className="ImagesContainer">
        <h1>Images</h1>
        {this.props.images.map(image => <ImageCard props={this.handleDelete()} key={image.id} image={image} />)}
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
