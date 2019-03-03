import React, {Component} from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone'
import classNames from 'classnames'

import { updateImageFormData } from '../actions/imageForm';
import { createImage } from '../actions/images';

class ImageForm extends Component {

  state = {
    title: '',
    description: '',
    image: ''
  }

  handleOnFileChange = (e) => {
    let file = e.target.files[0];
    this.setState({
        image: file
    })
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles) {
      let data = new FormData();
      data.append('image', acceptedFiles);
        this.setState({
          image: acceptedFiles[0]
        })
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = e =>{
      e.preventDefault()
      this.props.createImage(this.state)
      this.setState({
        title: '',
        description: '',
        image: ''
      });
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
            onChange={this.handleOnFileChange}
            // value={image}
            accept="image/*"
            />
        </div>

        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
                className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>

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
