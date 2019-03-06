import React, {Component} from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import './ImageForm.css';

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
    <div className="formcard">
      <div>
        <h1> Upload Image</h1>
      </div>

        <form className='containerform' onSubmit={this.handleOnSubmit}>
          <div>
             <label htmlFor="title">Title:</label>
             <input
              type="text"
              onChange={this.handleOnChange}
              name="title"
              value={title}
              />
         </div>
         <br></br>

         <div>
           <label htmlFor="description">Description:</label>
           <input
            type="text"
            name="description"
            onChange={this.handleOnChange}
            value={description}
            />
        </div>

        <br></br>



        <Dropzone
          className="dropzone"
          onDrop={this.onDrop}>
          {({getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
                className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop file here...</p> :
                    <p>Drop image here or click to select files to upload.</p>
                }
                <p>{this.state.image.name}</p>
              </div>
            )
          }}
        </Dropzone>
        <br></br>

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
