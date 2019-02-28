export const updateImageFormData = imageFormData => {
  return {
    type: 'UPDATED_DATA',
    imageFormData
  }
}

export const resetImageForm = () => {
  return {
    type: 'RESET_IMAGE_FORM'
  }
}
