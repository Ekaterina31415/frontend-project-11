import i18n from './i18next';

export const updateFeedback = (messageKey, isValid) => {
  const feedbackElement = document.querySelector('.feedback');
  feedbackElement.textContent = i18n.t(messageKey);
  feedbackElement.classList.toggle('text-danger', !isValid);
  feedbackElement.classList.toggle('text-success', isValid);
};

export const clearForm = () => {
  const inputElement = document.querySelector('#url-input');
  inputElement.value = '';
  inputElement.focus();
};
