import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';
import { selectMoneyFormat } from '@/redux/settings/selectors';
import { settingsAction } from '@/redux/settings/actions';
import { useNavigate } from 'react-router-dom';
import useResponsive from '@/hooks/useResponsive';

const CURRENCIES = [
  { code: 'INR', symbol: '₹',  name: 'Indian Rupee' },
  { code: 'USD', symbol: '$',  name: 'US Dollar' },
  { code: 'EUR', symbol: '€',  name: 'Euro' },
  { code: 'GBP', symbol: '£',  name: 'British Pound' },
  { code: 'AED', symbol: 'د.إ',name: 'UAE Dirham' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'JPY', symbol: '¥',  name: 'Japanese Yen' },
  { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc' },
  { code: 'CNY', symbol: '¥',  name: 'Chinese Yuan' },
  { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal' },
  { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
  { code: 'ZAR', symbol: 'R',  name: 'South African Rand' },
];

export const ChooseCurrency = () => {
  const { isMobile } = useResponsive();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const money = useSelector(selectMoneyFormat);
  const currentCode = money?.default_currency_code || 'INR';

  const options = [
    ...CURRENCIES.map((c) => ({
      value: c.code,
      label: `${c.symbol} ${c.code}`,
    })),
    { value: '__settings', label: '⚙ Currency Settings' },
  ];

  const handleChange = (val) => {
    if (val === '__settings') {
      navigate('/settings');
      return;
    }
    const selected = CURRENCIES.find((c) => c.code === val);
    if (!selected) return;

    const updatedMoney = {
      ...money,
      default_currency_code: selected.code,
      currency_symbol: selected.symbol,
    };

    // Persist to localStorage so useMoney picks it up after re-render
    const persisted = JSON.parse(window.localStorage.getItem('settings') || '{}');
    persisted.money_format_settings = updatedMoney;
    window.localStorage.setItem('settings', JSON.stringify(persisted));

    // Update Redux store
    dispatch(settingsAction.updateCurrency({ data: updatedMoney }));
  };

  return (
    <Select
      showSearch
      value={currentCode}
      filterOption={(input, opt) =>
        (opt?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={options}
      onChange={handleChange}
      style={{
        width: isMobile ? '80px' : '120px',
        float: 'right',
        marginTop: '5px',
        direction: 'ltr',
      }}
    />
  );
};

export default ChooseCurrency;