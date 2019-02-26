export default (state = [], action) => {
  switch(action.type) {
    case 'GET_IMAGES_SUCCESS':
      return action.images;

    default:
      return state;
  }
}
