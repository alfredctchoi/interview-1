import i18n from 'i18n-js';
import translations from './src/translations'

i18n.translations = translations;

export const message = (key, replace) => {
  console.log(replace);
  return i18n.t(key, replace);
};