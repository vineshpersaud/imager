export default (state = [], action) => {
  switch(action.type) {
    case 'GET_COMMENTS_SUCCESS':
      return action.images;
    case 'CREATE_COMMENT_SUCCESS':
      return state.concat(action.image);

    default:
      return state;
  }
}
