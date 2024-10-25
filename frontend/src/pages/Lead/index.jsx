import React from 'react';
import { Button, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Lead = () => {
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
      <UserAddOutlined style={styles.icon} />
      <Title level={2} style={styles.title}>Leads</Title>
      <Paragraph style={styles.paragraph}>
        Track and manage your leads effectively.
      </Paragraph>
      <Button type="primary" style={styles.button} onClick={() => alert("Manage Leads!")}>
        Manage Leads
      </Button>
    </div>
  );
};

export default Lead;
