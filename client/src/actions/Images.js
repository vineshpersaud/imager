const setImages = images => {
  return {
    type: 'GET_IMAGES_SUCCESS',
    images
  }
  debugger
}

export const getImages = () => {
    return dispatch => {
      return fetch(`http://localhost:3000/images`)
        .then(response => response.json())
        .then(images =>dispatch(setImages(images)))
        .catch(error => console.log(error));
    }
}
