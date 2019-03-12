export default (state = [], action) => {
  switch(action.type) {
    case 'GET_COMMENTS_SUCCESS':
      return action.comments;
    case 'CREATE_COMMENT_SUCCESS':
      return [action.comment.comments[0],...state]
    default:
      return state;
  }
}
