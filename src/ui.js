export const updateFeedback = (message, isValid) => {
  const feedbackElement = document.querySelector('.feedback');
  feedbackElement.textContent = message;
  if (isValid) {
    feedbackElement.classList.remove('text-danger');
    feedbackElement.classList.add('text-success');
  } else {
    feedbackElement.classList.remove('text-success');
    feedbackElement.classList.add('text-danger');
  }
};

export const clearForm = () => {
  const inputElement = document.querySelector('#url-input');
  inputElement.value = '';
  inputElement.focus();
};
