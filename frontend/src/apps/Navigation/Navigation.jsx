import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  CustomerServiceOutlined,
  UserOutlined,
  ShopOutlined,
  FilterOutlined,
  FileOutlined,
  ContainerOutlined,
  FileSyncOutlined,
  CreditCardOutlined,
  TagOutlined,
  TagsOutlined,
  WalletOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

export default function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: 'customer',
      icon: <CustomerServiceOutlined />,
      label: <Link to="/customer">Customers</Link>,
    },
    {
      key: 'people',
      icon: <UserOutlined />,
      label: <Link to="/people">People</Link>,
    },
    {
      key: 'company',
      icon: <ShopOutlined />,
      label: <Link to="/company">Companies</Link>,
    },
    {
      key: 'lead',
      icon: <FilterOutlined />,
      label: <Link to="/lead">Leads</Link>,
    },
    {
      key: 'offer',
      icon: <FileOutlined />,
      label: <Link to="/offer">Offers</Link>,
    },
    {
      key: 'invoice',
      icon: <ContainerOutlined />,
      label: <Link to="/invoice">Invoices</Link>,
    },
    {
      key: 'quote',
      icon: <FileSyncOutlined />,
      label: <Link to="/quote">Proforma Invoices</Link>,
    },
    {
      key: 'payment',
      icon: <CreditCardOutlined />,
      label: <Link to="/payment">Payments</Link>,
    },
    {
      key: 'product',
      icon: <TagOutlined />,
      label: <Link to="/product">Products</Link>,
    },
    {
      key: 'categoryproduct',
      icon: <TagsOutlined />,
      label: <Link to="/category/product">Product Categories</Link>,
    },
    {
      key: 'expenses',
      icon: <WalletOutlined />,
      label: <Link to="/expenses">Expenses</Link>,
    },
    {
      label: 'Settings',
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          key: 'generalSettings',
          label: <Link to="/settings">General Settings</Link>,
        },
        {
          key: 'paymentMode',
          label: <Link to="/payment/mode">Payment Mode</Link>,
        },
        {
          key: 'taxes',
          label: <Link to="/taxes">Taxes</Link>,
        },
        {
          key: 'about',
          label: <Link to="/about">About</Link>,
        },
      ],
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={256}
      theme="light"
    >

      <div
      className="logo"
      
      style={{
        cursor: 'pointer',
      }}>
        <img src='https://th.bing.com/th/id/OIP.mAYHtlNdxBrYqO7qDTvJFgHaEZ?w=768&h=456&rs=1&pid=ImgDetMain' alt="Logo" style={{ marginLeft: '-5px', height: '170%', width:'100%'} }/>
      </div>
      <Menu
        theme="light"
        mode="inline"
        items={items}
        style={{ height: '100%' }}
      />
    </Sider>
  );
}
