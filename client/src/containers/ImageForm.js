import React, {Component} from 'react';

class ImageForm extends Component {

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
        <h1> Upload Image</h1>
      </div>
        <form onSubmit={this.handleOnSubmit}>
        <div>
           <label htmlFor="title">Title:</label>
           <input type="text" name="title"/>
       </div>

        <div>
           <label htmlFor="description">Description:</label>
           <input type="text" name="description"/>
        </div>

        <div>
           <label htmlFor="image">Image:</label>
           <input type="file" name="image" accept="image/*"/>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>)
  }
}

export default ImageForm
