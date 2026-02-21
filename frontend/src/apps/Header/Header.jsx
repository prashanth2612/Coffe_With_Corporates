import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Layout, Select, Badge, Button } from 'antd';
import { LogoutOutlined, ToolOutlined, UserOutlined, GithubOutlined, CodeOutlined } from '@ant-design/icons';
import { selectCurrentAdmin } from '@/redux/auth/selectors';
import { selectMoneyFormat, selectAppSettings } from '@/redux/settings/selectors';
import { selectLangCode, selectLangDirection } from '@/redux/translate/selectors';
import { FILE_BASE_URL } from '@/config/serverApiConfig';
import useLanguage from '@/locale/useLanguage';
import ChooseCurrency from '@/components/ChooseCurrency';
import { translateAction } from '@/redux/translate/actions';
import { languagesList } from '@/locale/translation/translation';

const LANGUAGE_OPTIONS = languagesList.map((l) => ({
  value: l.value,
  label: <span>{l.icon} {l.label}</span>,
}));

const APP_OPTIONS = [
  { value: 'main', label: 'Main' },
];

export default function HeaderContent() {
  const dispatch = useDispatch();
  const currentAdmin = useSelector(selectCurrentAdmin);
  const money_format_settings = useSelector(selectMoneyFormat);
  const langCode = useSelector(selectLangCode);
  const langDirection = useSelector(selectLangDirection);
  const { Header } = Layout;
  const translate = useLanguage();
  const navigate = useNavigate();

  const handleLangChange = (value) => {
    dispatch(translateAction.translate(value));
  };

  const ProfileDropdown = () => (
    <div className="profileDropdown" onClick={() => navigate('/profile')}>
      <Avatar
        size="large"
        className="last"
        src={currentAdmin?.photo ? FILE_BASE_URL + currentAdmin?.photo : undefined}
        style={{ color: '#f56a00', backgroundColor: currentAdmin?.photo ? 'none' : '#fde3cf' }}
      >
        {currentAdmin?.name?.charAt(0)?.toUpperCase()}
      </Avatar>
      <div className="profileDropdownInfo">
        <p>{currentAdmin?.name} {currentAdmin?.surname}</p>
        <p>{currentAdmin?.email}</p>
      </div>
    </div>
  );

  const dropdownItems = [
    { label: <ProfileDropdown />, key: 'ProfileDropdown' },
    { type: 'divider' },
    { icon: <UserOutlined />, key: 'settingProfile', label: <Link to="/profile">{translate('profile_settings')}</Link> },
    { icon: <ToolOutlined />, key: 'settingApp', label: <Link to="/settings">{translate('app_settings')}</Link> },
    { type: 'divider' },
    { icon: <LogoutOutlined />, key: 'logout', label: <Link to="/logout">{translate('logout')}</Link> },
  ];

  return (
    <Header style={{
      padding: '0 24px',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 1px 4px rgba(44,24,16,0.08)',
      height: 56,
      position: 'sticky',
      top: 0,
      zIndex: 100,
      gap: 12,
    }}>

      {/* Left: Language + Currency + App selectors */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

        {/* Language */}
        <Select
          value={langCode || 'en_us'}
          options={LANGUAGE_OPTIONS}
          style={{ width: 160 }}
          variant="outlined"
          onChange={handleLangChange}
          showSearch
          filterOption={(input, opt) =>
            String(opt?.label?.props?.children ?? '').toLowerCase().includes(input.toLowerCase())
          }
        />

        {/* Currency */}
        <div style={{ minWidth: 140 }}>
          <ChooseCurrency />
        </div>

        {/* App switcher */}
        <Select
          defaultValue="main"
          options={APP_OPTIONS}
          style={{ width: 110 }}
          variant="outlined"
        />
      </div>

      {/* Right: Buttons + Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

        <Badge count={2} size="small">
          <Button
            type="primary"
            icon={<CodeOutlined />}
            onClick={() => window.open('https://github.com/prashanth2612')}
            style={{ background: '#1677ff', borderColor: '#1677ff' }}
          >
            Buy & Get Code Source
          </Button>
        </Badge>

        <Badge count={1} size="small">
          <Button
            type="primary"
            icon={<GithubOutlined />}
            onClick={() => window.open('https://github.com/prashanth2612')}
            style={{ background: '#16923e', borderColor: '#16923e' }}
          >
            Add Custom Features
          </Button>
        </Badge>

        <Dropdown menu={{ items: dropdownItems }} trigger={['click']} placement="bottomRight">
          <Avatar
            className="last"
            src={currentAdmin?.photo ? FILE_BASE_URL + currentAdmin?.photo : undefined}
            style={{
              color: '#f56a00',
              backgroundColor: currentAdmin?.photo ? 'none' : '#fde3cf',
              boxShadow: 'rgba(150, 190, 238, 0.35) 0px 0px 10px 2px',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            size="large"
          >
            {currentAdmin?.name?.charAt(0)?.toUpperCase()}
          </Avatar>
        </Dropdown>
      </div>
    </Header>
  );
}