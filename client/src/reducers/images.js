export default (state = [], action) => {
  switch(action.type) {
    case 'GET_IMAGES_SUCCESS':
      return action.images;

    case 'CREATE_IMAGE_SUCCESS':
      return state.concat(action.image);
    case 'REMOVE_IMAGE_SUCCESS':
        return state.filter(image => image.id !== action.image)

    default:
      return state;
  }
}
