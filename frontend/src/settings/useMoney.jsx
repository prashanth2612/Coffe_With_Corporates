import currency from 'currency.js';

import { useSelector } from 'react-redux';
import storePersist from '@/redux/storePersist';

import { selectMoneyFormat } from '@/redux/settings/selectors';

// Safe fallback defaults
const DEFAULT_MONEY_FORMAT = {
  currency_symbol: '$',
  currency_position: 'before',
  decimal_sep: '.',
  thousand_sep: ',',
  cent_precision: 2,
  zero_format: false,
  default_currency_code: 'USD',
  currency_code: 'USD',
};

const useMoney = () => {
  const money_format_settings = useSelector(selectMoneyFormat);

  const persisted = storePersist.get('settings')?.money_format_settings;

  // Merge: defaults → persisted → live Redux state (live state wins over persisted)
  const money_format_state = {
    ...DEFAULT_MONEY_FORMAT,
    ...(persisted || {}),
    ...(money_format_settings || {}),
  };

  function currencyFormat({ amount, currency_code }) {
    const safeAmount = isNaN(Number(amount)) ? 0 : Number(amount);
    const formatted = currency(safeAmount, {
      separator: money_format_state.thousand_sep || ',',
      decimal: money_format_state.decimal_sep || '.',
      symbol: '',
      precision: money_format_state.cent_precision ?? 2,
    }).format();

    if (safeAmount === 0 && money_format_state.zero_format) {
      return '0';
    }
    return formatted;
  }

  function moneyFormatter({ amount = 0, currency_code }) {
    const formatted = currencyFormat({ amount, currency_code });
    const sym = money_format_state.currency_symbol || '$';
    return money_format_state.currency_position === 'before'
      ? sym + ' ' + formatted
      : formatted + ' ' + sym;
  }

  function amountFormatter({ amount = 0, currency_code }) {
    return currencyFormat({ amount, currency_code });
  }

  function moneyRowFormatter({ amount = 0, currency_code }) {
    return {
      props: {
        style: {
          textAlign: 'right',
          whiteSpace: 'nowrap',
          direction: 'ltr',
        },
      },
      children: <>{moneyFormatter({ amount, currency_code })}</>,
    };
  }

  return {
    moneyRowFormatter,
    moneyFormatter,
    amountFormatter,
    currency_symbol: money_format_state.currency_symbol,
    currency_code: money_format_state.currency_code,
    currency_position: money_format_state.currency_position,
    decimal_sep: money_format_state.decimal_sep,
    thousand_sep: money_format_state.thousand_sep,
    cent_precision: money_format_state.cent_precision,
    zero_format: money_format_state.zero_format,
  };
};

export default useMoney;