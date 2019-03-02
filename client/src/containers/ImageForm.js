import React, {Component} from 'react';
import { connect } from 'react-redux';


import { updateImageFormData } from '../actions/imageForm';
import { createImage } from '../actions/images';

class ImageForm extends Component {

  state = {
    title: '',
    description: '',
    image: ''
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = e =>{
      e.preventDefault()
      debugger
      this.props.createImage(this.state)
  }

  render(){
   const { title, description, image} = this.state;
    return (
    <div>
      <div>
        <h1> Upload Image</h1>
      </div>
        <form onSubmit={this.handleOnSubmit}>
        <div>
           <label htmlFor="title">Title:</label>
           <input
            type="text"
            onChange={this.handleOnChange}
            name="title"
            value={title}
            />
       </div>

        <div>
           <label htmlFor="description">Description:</label>
           <input
            type="text"
            name="description"
            onChange={this.handleOnChange}
            value={description}
            />
        </div>

        <div>
           <label htmlFor="image">Image:</label>
           <input
            type="file"
            name="image"
            onChange={this.handleOnChange}
            value={image}
            accept="image/*"
            />
        </div>
        <button type="submit">Upload Image</button>
      </form>
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    imageFormData: state.imageFormData
  }
}

export default connect(mapStateToProps, {
  updateImageFormData,
  createImage
})(ImageForm);
