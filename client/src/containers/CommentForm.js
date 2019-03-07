import React, {Component} from 'react';

class CommentForm extends Component {

  handleOnChange = e =>{

  }
  handleOnSubmit = e =>{
      e.preventDefault()
      alert('Working')
  }

  render(){
    return (

    <div>
      <div>
        <h1> Post Comment</h1>
      </div>
        <form onSubmit={this.handleOnSubmit}>
        <div>
           <label htmlFor="username">Username:</label>
           <input type="text" name="username"/>
       </div>

        <div>
           <label htmlFor="comment">Comment:</label>
           <input type="textarea" name="comment"/>
        </div>

        <button type="submit">Post Comment</button>
      </form>
    </div>)
  }
}

export default CommentForm
