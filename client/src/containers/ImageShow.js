import React,{Component} from 'react';
import { connect } from 'react-redux';
import Images from './Images';
import CommentForm from './CommentForm.js'
import CommentCard from '../components/CommentCard.js'
import {getComments} from '../actions/comments';

class ImageShow extends Component {

  componentDidMount() {
    this.props.getComments(this.props.image)
    debugger
  }

  render(){
  const {image} = this.props

   return(
    <div>
      <h3>{image.title}</h3>
      <h3>{image.description}</h3>
      <img
        src={"http://localhost:3000"+image.url}
        alt={image.description}
      />
      <CommentForm
        imageId={image.id}
        />
      {this.props.comments.map(comment=>
        <CommentCard
          comment={comment}
          />
      )}
    <div>

    </div>
    </div>)
  }
}
const mapStateToProps = (state, ownProps) => {
  const image = state.images.find(image => image.id == ownProps.match.params.imageId)
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

export default connect(mapStateToProps,{CommentForm,getComments})(ImageShow);
