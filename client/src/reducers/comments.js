export default (state = [], action) => {
  switch(action.type) {
    case 'GET_COMMENTS_SUCCESS':
      return action.comments;
    case 'CREATE_COMMENT_SUCCESS':
    debugger
      return state.concat(action.comment.comments[action.comment.comments.length-1]);
    default:
      return state;
  }
}
