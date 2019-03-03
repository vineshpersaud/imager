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
    const body = new FormData(image);
    body.append('image[title]', image.title);
    body.append('image[description]', image.description);
    body.append('image[picture]', image.image);

  return dispatch => {
    return fetch(`http://localhost:3000/images`, {
      method: "POST",
      body: body
    })
      .then((response) => {return response.json()})
      .then((image)=>{
         dispatch(addImage(image))
    })
      .catch(error => console.log(error))
  }
}
