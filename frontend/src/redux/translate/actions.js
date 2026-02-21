import * as actionTypes from './types';

import translation from '@/locale/translation/translation';

const RTL_LANGUAGES = ['ar_ar', 'ar_dz', 'ar_eg', 'ar_jo', 'ar_ma', 'he', 'fa', 'ur'];

export const translateAction = {
  resetState: () => (dispatch) => {
    dispatch({
      type: actionTypes.RESET_STATE,
    });
  },
  translate:
    (value = 'en_us') =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
      });

      const langKey = translation[value] ? value : 'en_us';
      let data = translation[langKey];
      const isRtl = RTL_LANGUAGES.includes(value.toLowerCase());

      if (data) {
        const LANG_STATE = {
          result: data,
          isRtl: isRtl,
          langDirection: isRtl ? 'rtl' : 'ltr',
          langCode: value,
          isLoading: false,
          isSuccess: true,
        };
        window.localStorage.setItem('translate', JSON.stringify(LANG_STATE));
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          payload: data,
          langCode: value,
          isRtl: isRtl,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
        });
      }
    },
};