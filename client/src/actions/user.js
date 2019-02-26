export default function manageImages(state = {
  images: [],
}, action) {
  switch (action.type) {
    case 'GET_IMAGES':
      return {}

    default:
      return state;
  }
}
