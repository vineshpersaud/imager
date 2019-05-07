import React,{Component} from 'react';
import { connect } from 'react-redux';
import Images from './Images';
import CommentForm from './CommentForm.js'
import CommentCard from '../components/CommentCard.js'
import ImageShowCard from '../components/ImageShowCard'
import {getComments} from '../actions/comments';
import {likeImage} from '../actions/images';
import {getImages} from '../actions/images';

class ImageShow extends Component {
  state ={
      likes: 0
  }



  componentDidMount() {
    this.props.getComments(this.props.image)
  }


  render(){
  const {image} = this.props
   return(
    <div key={image.id}>
      <ImageShowCard image={image}/>
      <CommentForm
        imageId={image.id}
        />

      {this.props.comments.map(comment=>
        <CommentCard
          comment={comment}
        />
      )}
    </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  const image = state.images.find(image => image.id === parseInt(ownProps.match.params.imageId))
  if (image) {
    return {
      image,
      comments: state.comments
     }
  } else {
    return { image: {},
    comments: state.comments
   }
  }
}

export default connect(mapStateToProps,{CommentForm,getComments,likeImage})(ImageShow);
