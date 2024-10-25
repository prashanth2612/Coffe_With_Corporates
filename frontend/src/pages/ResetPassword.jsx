import React from 'react';
import { Form, Button } from 'antd';
import ResetPasswordForm from '../forms/ResetPasswordForm';
const ResetPassword = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Handle form submission
  };

  return (
    <Form
      name="reset_password"
      onFinish={onFinish}
      initialValues={{
        remember: true,
      }}
    >
      <ResetPasswordForm />
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Update Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResetPassword;
