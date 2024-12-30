import { strings } from './ui';

const defaultLang = 'en';

export function useTranslations(lang: keyof typeof strings) {
  return function translate(key: keyof (typeof strings)[typeof defaultLang]) {
    return strings[lang][key] || strings[defaultLang][key];
  };
}
