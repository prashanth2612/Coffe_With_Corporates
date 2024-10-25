import React from 'react';
import { Button, Typography } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const PaymentModule = () => {
  const styles = {
    container: {
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      backgroundColor: '#ffffff',
      maxWidth: '600px',
      margin: '20px auto',
    },
    icon: {
      fontSize: '50px',
      color: '#1890ff',
      marginBottom: '10px',
    },
    title: {
      marginBottom: '10px',
    },
    paragraph: {
      marginBottom: '20px',
    },
    button: {
      display: 'block',
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <CreditCardOutlined style={styles.icon} />
      <Title level={2} style={styles.title}>Payment Module</Title>
      <Paragraph style={styles.paragraph}>
        Manage all payment-related tasks.
      </Paragraph>
      <Button type="primary" style={styles.button} onClick={() => alert("Manage Payment Module!")}>
        Manage Payment Module
      </Button>
    </div>
  );
};

export default PaymentModule;
