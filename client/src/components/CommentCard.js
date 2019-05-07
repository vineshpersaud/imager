
import './CommentCard.css'
import React,{Component} from 'react';


class CommentCard extends Component{

  state = {
    like: 0
  }

  like = (e) => {
    this.setState({
      like: this.state.like + 1
    })
  }

  render(){
    const {comment} = this.props
    return(
     <div key={comment.id} className='comment'>
        <p>{comment.username}</p>
        <h3>{comment.text}</h3>
        { /*  <button
          onClick ={this.like}
          >
          {this.state.like}
        </button*/}
      </div>)}
}
export default CommentCard;
