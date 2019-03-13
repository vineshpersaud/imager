import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/comments';
import './CommentForm.css'


class CommentForm extends Component {

  state = {
    username: 'anonymous',
    text: ''
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = e =>{
      e.preventDefault()
      this.props.createComment(this.state,this.props.imageId)
  }

  render(){
    const {username,text} = this.state

    return (
    <div className='commentform'>

        <form  onSubmit={this.handleOnSubmit}>

        <div>
           
           <input
             type="textarea"
             name="text"
             id = "commentbox"
             placeholder="Write a comment"
             onChange={this.handleOnChange}
             value={text}
             />
        </div>

        <div>
           <label htmlFor="username">Username:</label>
           <input
             type="text"
             name="username"
             onChange={this.handleOnChange}
             value={username}
             />
       </div>

        <button type="submit">Post Comment</button>
      </form>
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    commentFormData: state.commentFormData
  }
}

export default connect(mapStateToProps, {
  createComment
})(CommentForm);
