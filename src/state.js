import onChange from 'on-change';

export const initialState = {
  processState: 'filling',
  formData: {
    url: '',
  },
  formState: {
    valid: true,
    error: '',
  },
  feeds: [],
};

export const makeState = (feeds) => onChange({
  ...initialState,
  feeds,
}, () => {});
