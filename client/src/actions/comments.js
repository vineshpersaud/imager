const addComment= comment => {
  return {
    type: 'CREATE_COMMENT_SUCCESS',
    comment
  }
}


export const createComment= (comment,imageId) => {
  debugger
  return dispatch => {
    return fetch(`http://localhost:3000/images/${imageId}/comments/create`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: comment })
    })
      .then(response => response.json())
      .then(comment => {
        // dispatch(addComment(comment))
        // dispatch(resetCommentForm())
      })
      .catch(error => console.log(error))
  }
}
