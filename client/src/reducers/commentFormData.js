const initialState = {
  username: '',
  text: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.imageFormData;
    case 'RESET_IMAGE_FORM':
      return initialState;
    default:
      return state;
  }
}
