import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Drawer, Layout, Menu, Avatar } from 'antd';
import { useAppContext } from '@/context/appContext';
import useLanguage from '@/locale/useLanguage';
import useResponsive from '@/hooks/useResponsive';
import { useSelector } from 'react-redux';
import { selectCurrentAdmin } from '@/redux/auth/selectors';
import { selectLangDirection } from '@/redux/translate/selectors';
import {
  SettingOutlined, CustomerServiceOutlined, ContainerOutlined,
  FileSyncOutlined, DashboardOutlined, TagOutlined, TagsOutlined,
  UserOutlined, CreditCardOutlined, MenuOutlined, FileOutlined,
  ShopOutlined, FilterOutlined, WalletOutlined, ReconciliationOutlined,
  CoffeeOutlined, TeamOutlined, DatabaseOutlined, ShoppingCartOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

export default function Navigation() {
  const { isMobile } = useResponsive();
  return isMobile ? <MobileSidebar /> : <Sidebar collapsible={false} />;
}

function Sidebar({ collapsible, isMobile = false }) {
  let location = useLocation();
  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [currentPath, setCurrentPath] = useState(location.pathname.slice(1) || 'dashboard');
  const translate = useLanguage();
  const navigate = useNavigate();
  const currentAdmin = useSelector(selectCurrentAdmin);
  const langDirection = useSelector(selectLangDirection);

  const navGroups = [
    {
      key: 'main',
      label: 'MAIN',
      items: [
        { key: 'dashboard', icon: <DashboardOutlined />, label: <Link to="/">{translate('dashboard')}</Link> },
      ],
    },
    {
      key: 'crm',
      label: 'CRM',
      items: [
        { key: 'customer', icon: <CustomerServiceOutlined />, label: <Link to="/customer">{translate('customers')}</Link> },
        { key: 'lead', icon: <FilterOutlined />, label: <Link to="/lead">{translate('leads')}</Link> },
        { key: 'people', icon: <UserOutlined />, label: <Link to="/people">{translate('peoples')}</Link> },
        { key: 'company', icon: <ShopOutlined />, label: <Link to="/company">{translate('companies')}</Link> },
        { key: 'employee', icon: <TeamOutlined />, label: <Link to="/employee">{translate('employees')}</Link> },
      ],
    },
    {
      key: 'finance',
      label: 'FINANCE',
      items: [
        { key: 'invoice', icon: <ContainerOutlined />, label: <Link to="/invoice">{translate('invoices')}</Link> },
        { key: 'quote', icon: <FileSyncOutlined />, label: <Link to="/quote">{translate('proforma invoices')}</Link> },
        { key: 'offer', icon: <FileOutlined />, label: <Link to="/offer">{translate('offers')}</Link> },
        { key: 'payment', icon: <CreditCardOutlined />, label: <Link to="/payment">{translate('payments')}</Link> },
        { key: 'order', icon: <ShoppingCartOutlined />, label: <Link to="/order">{translate('orders')}</Link> },
      ],
    },
    {
      key: 'catalog',
      label: 'CATALOG',
      items: [
        { key: 'product', icon: <TagOutlined />, label: <Link to="/product">{translate('products')}</Link> },
        { key: 'categoryproduct', icon: <TagsOutlined />, label: <Link to="/category/product">{translate('products_category')}</Link> },
        { key: 'expenses', icon: <WalletOutlined />, label: <Link to="/expenses">{translate('expenses')}</Link> },
        { key: 'expensesCategory', icon: <ReconciliationOutlined />, label: <Link to="/category/expenses">{translate('expenses_Category')}</Link> },
        { key: 'inventory', icon: <DatabaseOutlined />, label: <Link to="/inventory">{translate('inventory')}</Link> },
      ],
    },
    {
      key: 'config',
      label: 'SETTINGS',
      items: [
        {
          key: 'settings', icon: <SettingOutlined />, label: translate('Settings'),
          children: [
            { key: 'generalSettings', label: <Link to="/settings">{translate('settings')}</Link> },
            { key: 'paymentMode', label: <Link to="/payment/mode">{translate('payments_mode')}</Link> },
            { key: 'taxes', label: <Link to="/taxes">{translate('taxes')}</Link> },
            { key: 'about', label: <Link to="/about">{translate('about')}</Link> },
          ],
        },
      ],
    },
  ];

  // Flatten all items into antd Menu format with group dividers
  const menuItems = navGroups.flatMap((group) => [
    {
      key: `divider-${group.key}`,
      type: 'group',
      label: !isNavMenuClose ? (
        <span style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '1.5px',
          color: 'rgba(212,169,106,0.45)',
          padding: '0 4px',
          display: 'block',
          marginTop: '8px',
        }}>{group.label}</span>
      ) : null,
      children: group.items,
    },
  ]);

  useEffect(() => {
    if (location.pathname === '/') setCurrentPath('dashboard');
    else setCurrentPath(location.pathname.slice(1));
  }, [location]);

  const onCollapse = () => navMenu.collapse();

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : false}
      onCollapse={onCollapse}
      className="navigation"
      width={240}
      style={{
        height: '100vh',
        position: isMobile ? 'absolute' : 'sticky',
        top: 0,
        left: 0,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}
      theme="dark"
    >
      {/* Logo */}
      <div
        onClick={() => navigate('/')}
        style={{
          padding: '20px 16px 16px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          borderBottom: '1px solid rgba(212,169,106,0.12)',
        }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, #C9853A, #6F4E37)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, boxShadow: '0 2px 8px rgba(201,133,58,0.4)',
        }}>
          <CoffeeOutlined style={{ fontSize: 18, color: '#fff' }} />
        </div>
        {!isNavMenuClose && (
          <div>
            <div style={{ color: '#F5E6D3', fontWeight: 700, fontSize: 13, lineHeight: 1.2, letterSpacing: 0.3 }}>
              Coffee With
            </div>
            <div style={{ color: '#C9A87C', fontWeight: 500, fontSize: 11, letterSpacing: 0.5 }}>
              Corporates
            </div>
          </div>
        )}
      </div>

      {/* Menu */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 0' }}>
        <Menu
          items={menuItems}
          mode="inline"
          theme="dark"
          selectedKeys={[currentPath]}
          style={{ background: 'transparent', border: 'none' }}
        />
      </div>

      {/* User profile at bottom */}
      {!isNavMenuClose && (
        <div
          onClick={() => navigate('/profile')}
          style={{
            padding: '12px 16px',
            borderTop: '1px solid rgba(212,169,106,0.12)',
            display: 'flex', alignItems: 'center', gap: 10,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,169,106,0.08)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <Avatar
            size={32}
            style={{ background: 'linear-gradient(135deg, #C9853A, #6F4E37)', flexShrink: 0, fontSize: 13 }}
          >
            {currentAdmin?.name?.charAt(0)?.toUpperCase() || 'A'}
          </Avatar>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ color: '#F5E6D3', fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {currentAdmin?.name} {currentAdmin?.surname}
            </div>
            <div style={{ color: 'rgba(212,169,106,0.6)', fontSize: 10, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {currentAdmin?.role || 'Admin'}
            </div>
          </div>
        </div>
      )}
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const langDirection = useSelector(selectLangDirection);
  return (
    <>
      <Button type="text" size="large" onClick={() => setVisible(true)}
        style={{ margin: '0 0 0 16px' }}>
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={240}
        style={{ backgroundColor: '#2C1810' }}
        contentWrapperStyle={{ boxShadow: 'none' }}
        placement={langDirection === 'rtl' ? 'right' : 'left'}
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
      >
        <Sidebar collapsible={false} isMobile={true} />
      </Drawer>
    </>
  );
}