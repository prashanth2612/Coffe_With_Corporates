import en_us from './en_us';
import hi_in from './hi_in';
import te_in from './te_in';

// Language lookup object: { en_us: {...translations} }
// For languages without a dedicated file, en_us is used as fallback
const translationMap = {
  en_us,
  hi_in,
  te_in,
  // Fallback to English for languages without translation files yet
  fr_fr: en_us,
  de_de: en_us,
  es_es: en_us,
  it_it: en_us,
  pt_br: en_us,
  ar_ar: en_us,
  zh_cn: en_us,
  ja_jp: en_us,
  ru_ru: en_us,
  ko_kr: en_us,
  tr_tr: en_us,
  nl_nl: en_us,
  pl_pl: en_us,
  id_id: en_us,
  vi_vn: en_us,
};

export default translationMap;

// Language list for dropdowns in Settings
export const languagesList = [
  { value: 'en_us', label: 'English (US)', icon: '🇺🇸' },
  { value: 'fr_fr', label: 'Français', icon: '🇫🇷' },
  { value: 'de_de', label: 'Deutsch', icon: '🇩🇪' },
  { value: 'es_es', label: 'Español', icon: '🇪🇸' },
  { value: 'it_it', label: 'Italiano', icon: '🇮🇹' },
  { value: 'pt_br', label: 'Português (BR)', icon: '🇧🇷' },
  { value: 'ar_ar', label: 'العربية', icon: '🇸🇦' },
  { value: 'zh_cn', label: '中文 (简体)', icon: '🇨🇳' },
  { value: 'ja_jp', label: '日本語', icon: '🇯🇵' },
  { value: 'hi_in', label: 'हिन्दी', icon: '🇮🇳' },
  { value: 'te_in', label: 'తెలుగు', icon: '🇮🇳' },
  { value: 'ru_ru', label: 'Русский', icon: '🇷🇺' },
  { value: 'ko_kr', label: '한국어', icon: '🇰🇷' },
  { value: 'tr_tr', label: 'Türkçe', icon: '🇹🇷' },
  { value: 'nl_nl', label: 'Nederlands', icon: '🇳🇱' },
  { value: 'pl_pl', label: 'Polski', icon: '🇵🇱' },
  { value: 'id_id', label: 'Bahasa Indonesia', icon: '🇮🇩' },
  { value: 'vi_vn', label: 'Tiếng Việt', icon: '🇻🇳' },
];