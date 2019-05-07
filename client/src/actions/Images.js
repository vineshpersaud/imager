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

const removeImage = image => {
  return {
    type: 'REMOVE_IMAGE_SUCCESS',
    image
  }
}

const updateImage = image => {
  return {
    type: 'REMOVE_IMAGE_SUCCESS',
    image
  }
}

const addLike = image => {
  return {
    type: 'ADD_LIKE_SUCCESS',
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
  console.log('C')
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
        console.log('D')
         dispatch(addImage(image))
    })
      .catch(error => console.log(error))
  }
  console.log('E')
}

// export const deleteImage = (image) => {
//   fetch(`http://localhost:3000/images/${image.id}`, {
//      method: 'DELETE',
//   })
//   .then((response) => {return response.json()})
//   .then(images => setImages(images))
//   .catch(error => console.log(error));
// };

export const deleteImage = (image) => {
  let imageId = image.id
  return dispatch => {
    return fetch(`http://localhost:3000/images/${image.id}`, {
     method: 'DELETE',
  })
    .then((image)=>{
           dispatch(removeImage(imageId))
      })
    .then(images => setImages(images))
  .catch(error => console.log(error));
  }
}


export const likeImage = (image) => {
  let imageId = image.id
  return dispatch => {
    return fetch(`http://localhost:3000/images/${imageId}/like`, {
     method: 'POST',
  })
    .then((response) => {return response.json()})
    .then((image)=>{
            dispatch(addLike(image))
      })
  .catch(error => console.log(error));
  }
}
