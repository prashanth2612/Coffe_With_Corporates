import React from 'react';
import { Button, Typography } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import DataTable from '@/components/DataTable';

const { Title, Paragraph } = Typography;

const People = () => {
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
      <TeamOutlined style={styles.icon} />
      <Title level={2} style={styles.title}>People</Title>
      <Paragraph style={styles.paragraph}>
        Manage your team and their roles.
      </Paragraph>
      <Button type="primary" style={styles.button} onClick={() => alert("Manage People!")}>
        Manage People
      </Button>
      <DataTable/>
    </div>
  );
};

export default People;
