import React, {Component} from 'react';
import { connect } from 'react-redux';


import { updateImageFormData } from '../actions/imageForm';
import { createImage } from '../actions/images';

class ImageForm extends Component {

  handleOnChange = e =>{
    const { name, value } = e.target;
    const currentimageFormData = Object.assign({}, this.props.imageFormData, {
      [name]: value
    })
    this.props.updateImageFormData(currentimageFormData)
  }

  handleOnSubmit = e =>{
      e.preventDefault()
      this.props.createImage(this.props.imageFormData)
  }

  render(){
    // const { title, description, image} = this.props.imageFormData;
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
            value={this.title}
            />
       </div>

        <div>
           <label htmlFor="description">Description:</label>
           <input
            type="text"
            name="description"
            onChange={this.handleOnChange}
            value={this.description}
            />
        </div>

        <div>
           <label htmlFor="image">Image:</label>
           <input
            type="file"
            name="image"
            onChange={this.handleOnChange}
            value={this.description}
            accept="image/*"
            />
        </div>
        <button type="submit">Create User</button>
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
