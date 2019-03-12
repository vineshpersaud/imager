import update from 'react-addons-update';
export default (state = [], action) => {
  switch(action.type) {
    case 'GET_IMAGES_SUCCESS':
      return action.images;
    case 'CREATE_IMAGE_SUCCESS':
      return state.concat(action.image);
    case 'REMOVE_IMAGE_SUCCESS':
        return state.filter(image => image.id !== action.image)
    case 'ADD_LIKE_SUCCESS':
      return state.map(function(image){
        if (image.id == action.image.id){
          return action.image}
        else{
          return image}
      })
    default:
      return state;
  }
}
