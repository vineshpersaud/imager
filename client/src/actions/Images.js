import { resetImageForm } from './imageForm';

const setImages = images => {
  return {
    type: 'GET_IMAGES_SUCCESS',
    images
  }
}

const addImage = image => {
  return {
    type: 'CREATE_IMAGE_SUCCESS',
    image
  }
}

export const getImages = () => {
    return dispatch => {
      return fetch(`http://localhost:3000/images`)
        .then(response => response.json())
        .then(images =>dispatch(setImages(images)))
        .catch(error => console.log(error));
    }
}


export const createImage= image => {
  return dispatch => {
    return fetch(`http://localhost:3000/images`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image: image })
    })
      .then(response => response.json())
      .then(image => {
        dispatch(addImage(image))
        dispatch(resetImageForm())
      })
      .catch(error => console.log(error))
  }
}
