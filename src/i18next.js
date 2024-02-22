import i18n from 'i18next';

i18n
  .init({
    resources: {
      en: {
        translation: {
          formErrors: {
            urlRequired: 'URL is required',
            urlNotValid: 'URL is not a valid URL',
            urlNotOneOf: 'URL is already in the list',
          },
          success: 'RSS has been successfully added',
        },
      },
      ru: {
        translation: {
          formErrors: {
            urlRequired: 'URL обязателен для заполнения',
            urlNotValid: 'Неверный формат URL',
            urlNotOneOf: 'URL уже находится в списке',
          },
          success: 'RSS успешно добавлен',
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
