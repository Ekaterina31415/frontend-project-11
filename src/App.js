import { makeState } from './state.js';
import urlSchema from './validation.js';
import { updateFeedback, clearForm } from './ui.js';
import i18n from './i18next.js';

const runApp = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const state = makeState([]);

    const form = document.querySelector('.rss-form');
    const input = document.querySelector('#url-input');
    const feedbackElement = document.querySelector('.feedback');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      state.processState = 'sending';
      const url = input.value;

      urlSchema(state.feeds).validate(url)
        .then(() => {
          state.feeds.push({ url });
          state.processState = 'finished';
          clearForm();
          updateFeedback(i18n.t('success'), true);
          // Feeds update logic will be here
        })
        .catch((err) => {
          state.processState = 'failed';
          updateFeedback(i18n.t(err.errors[0]), false);
        });
    });

    state.onChange((path, value) => {
      if (path === 'processState') {
        switch (value) {
          case 'sending':
            form.disabled = true;
            break;
          case 'failed':
          case 'finished':
            form.disabled = false;
            if (value === 'finished') {
              feedbackElement.textContent = i18n.t('success');
            }
            break;
          default:
            break;
        }
      }
    });

    input.addEventListener('input', () => {
      if (state.processState !== 'filling') {
        state.processState = 'filling';
      }
    });
  });
};

export default runApp;
