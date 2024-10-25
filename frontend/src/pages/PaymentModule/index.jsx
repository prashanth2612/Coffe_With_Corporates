import React from 'react';
import { Button, Typography } from 'antd';
import { PayCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const PaymentModule = () => {
  return (
    <div style={styles.container}>
      <PayCircleOutlined style={styles.icon} />
      <Title level={2} style={styles.title}>Payment Module</Title>
      <Paragraph style={styles.paragraph}>
        Configure and manage your payment settings.
      </Paragraph>
      <Button type="primary" style={styles.button} onClick={() => alert("Configure Payment Settings!")}>
        Configure Settings
      </Button>
    </div>
  );
};

export default PaymentModule;
