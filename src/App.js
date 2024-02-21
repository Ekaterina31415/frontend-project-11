import { makeState } from './state.js';
import urlSchema from './validation.js';
import { updateFeedback, clearForm } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const state = makeState([]);

  const form = document.querySelector('.rss-form');
  const input = document.querySelector('#url-input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = input.value;

    urlSchema(state.feeds).validate(url)
      .then(() => {
        state.feeds.push({ url });
        clearForm();
        updateFeedback('RSS успешно добавлен', true);
        // Feed logic
      })
      .catch((err) => {
        updateFeedback(err.message, false);
      });
  });

  input.addEventListener('input', () => {
    const url = input.value;
    urlSchema(state.feeds).validate(url, { abortEarly: false })
      .then(() => updateFeedback('', true))
      .catch((err) => updateFeedback(err.message, false));
  });
});
