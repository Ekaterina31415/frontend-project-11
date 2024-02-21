import onChange from 'on-change';

export const initialState = {
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
