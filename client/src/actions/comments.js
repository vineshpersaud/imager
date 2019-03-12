const addComment= comment => {
  return {
    type: 'CREATE_COMMENT_SUCCESS',
    comment
  }
}

const setComments= comments => {
  return {
    type: 'GET_COMMENTS_SUCCESS',
    comments
  }
}

export const getComments = (image) => {
    return dispatch => {
      return fetch(`http://localhost:3000/images/${image.id}`)
        .then(response => response.json())
        .then(image =>dispatch(setComments(image.comments)))
        .catch(error => console.log(error));
    }
}

export const createComment= (comment,imageId) => {
  return dispatch => {
    return fetch(`http://localhost:3000/images/${imageId}/comments/create`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: comment })
    })
      .then(response => response.json())
      .then(image => {
        dispatch(addComment(image))
        // dispatch(resetCommentForm())
      })
      .catch(error => console.log(error))
  }
}
