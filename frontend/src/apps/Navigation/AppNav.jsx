import {
    SettingOutlined,
    CustomerServiceOutlined,
    ContainerOutlined,
    FileSyncOutlined,
    DashboardOutlined,
    TagOutlined,
    TagsOutlined,
    UserOutlined,
    CreditCardOutlined,
    FileOutlined,
    ShopOutlined,
    FilterOutlined,
    WalletOutlined,
  } from '@ant-design/icons';
  
  const AppNav = () => [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'customer',
      icon: <CustomerServiceOutlined />,
      label: 'Customer',
    },
    {
      key: 'people',
      icon: <UserOutlined />,
      label: 'People',
    },
    {
      key: 'company',
      icon: <ShopOutlined />,
      label: 'Company',
    },
    {
      key: 'lead',
      icon: <FilterOutlined />,
      label: 'Lead',
    },
    {
      key: 'offer',
      icon: <FileOutlined />,
      label: 'Offer Leads',
    },
    {
      key: 'invoice',
      icon: <ContainerOutlined />,
      label: 'Invoice',
    },
    {
      key: 'quote',
      icon: <FileSyncOutlined />,
      label: 'Quote',
    },
    {
      key: 'payment',
      icon: <CreditCardOutlined />,
      label: 'Payment',
    },
    {
      key: 'expenses',
      icon: <WalletOutlined />,
      label: 'Expense',
    },
    {
      key: 'product',
      icon: <TagOutlined />,
      label: 'Product',
    },
    {
      key: 'categoryproduct',
      icon: <TagsOutlined />,
      label: 'Product Category',
    },
    {
      label: 'Settings',
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          key: 'admin',
          label: 'Staff',
        },
        {
          key: 'generalSettings',
          label: 'General Settings',
        },
        {
          key: 'expensesCategory',
          label: 'Expenses Category',
        },
        {
          key: 'paymentMode',
          label: 'Payment Mode',
        },
        {
          key: 'taxes',
          label: 'Taxes',
        },
        {
          key: 'about',
          label: 'About',
        },
        // {
        //   key: 'advancedSettings',
        //   label: 'Advanced Settings',
        // },
      ],
    },
  ];
  
  export default AppNav;
  