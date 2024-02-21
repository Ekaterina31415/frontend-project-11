import * as yup from 'yup';

const urlSchema = (feeds) => yup
  .string()
  .url('Неверный формат URL')
  .notOneOf(feeds.map((feed) => feed.url), 'URL уже добавлен')
  .required('URL обязателен для заполнения');

export default urlSchema;
