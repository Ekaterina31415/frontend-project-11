import * as yup from 'yup';
import i18n from './i18next';

yup.setLocale({
  mixed: {
    required: i18n.t('formErrors.urlRequired'),
  },
  string: {
    url: i18n.t('formErrors.urlNotValid'),
  },
});

const urlSchema = (feeds) => yup
  .string()
  .url()
  .notOneOf(feeds.map((feed) => feed.url))
  .required();

export default urlSchema;
