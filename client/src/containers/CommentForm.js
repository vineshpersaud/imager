import React, {Component} from 'react';

class CommentForm extends Component {

  state = {
    username: '',
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
      alert('Working')
  }

  render(){
    const {username,text} = this.state

    return (
    <div>
      <div>
        <h1> Post Comment</h1>
      </div>
        <form onSubmit={this.handleOnSubmit}>
        <div>
           <label htmlFor="username">Username:</label>
           <input
             type="text"
             name="username"
             onChange={this.handleOnChange}
             value={username}
             />
       </div>

        <div>
           <label htmlFor="text">Comment:</label>
           <input
             type="textarea"
             name="text"
             onChange={this.handleOnChange}
             value={text}
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

export default CommentForm
