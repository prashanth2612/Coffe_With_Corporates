import React from 'react';
import { Form, Input, Checkbox, Divider } from 'antd';
import { UserOutlined, LockOutlined, InfoCircleOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

export default function LoginForm() {
  const langDirection = useSelector(selectLangDirection);
  const translate = useLanguage();

  return (
    <div style={{ direction: langDirection }}>
      {/* Demo credentials hint */}
      <div style={{
        background: 'linear-gradient(135deg, #f5f0eb, #ede4d9)',
        border: '1px solid #d4a574',
        borderRadius: 8,
        padding: '10px 14px',
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <InfoCircleOutlined style={{ color: '#6F4E37', fontSize: 14, flexShrink: 0 }} />
        <div style={{ fontSize: 12, color: '#5a3e2b', lineHeight: 1.5 }}>
          <strong>Demo credentials</strong><br />
          Email: <code style={{ background: '#fff', padding: '1px 4px', borderRadius: 3 }}>admin@demo.com</code>
          &nbsp;·&nbsp;
          Password: <code style={{ background: '#fff', padding: '1px 4px', borderRadius: 3 }}>admin123</code>
        </div>
      </div>

      <Form.Item
        label={translate('email')}
        name="email"
        initialValue="admin@demo.com"
        rules={[{ required: true }, { type: 'email' }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="admin@demo.com"
          type="email"
          size="large"
        />
      </Form.Item>

      <Form.Item
        label={translate('password')}
        name="password"
        initialValue="admin123"
        rules={[{ required: true }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="admin123"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle initialValue={true}>
          <Checkbox>{translate('Remember me')}</Checkbox>
        </Form.Item>
        <a
          className="login-form-forgot"
          href="/forgetpassword"
          style={{ marginLeft: langDirection === 'rtl' ? '220px' : '0px', float: 'right', fontSize: 13 }}
        >
          {translate('Forgot password')}
        </a>
      </Form.Item>
    </div>
  );
}
