import { makeState } from './state.js';
import urlSchema from './validation.js';
import { updateFeedback, clearForm } from './ui.js';
import './i18next.js';

const runApp = () => {
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
          updateFeedback('success', true);
          // Feed logic
        })
        .catch((err) => {
          updateFeedback(err.errors[0], false);
        });
    });

    input.addEventListener('input', () => {
      const url = input.value;
      urlSchema(state.feeds).validate(url, { abortEarly: false })
        .then(() => updateFeedback('', true))
        .catch((err) => updateFeedback(err.errors[0], false));
    });
  });
};

export default runApp;
