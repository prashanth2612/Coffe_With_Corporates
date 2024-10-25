import React from 'react';
import { Button, Typography } from 'antd';
import { CommentOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Quote = () => {
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
      <CommentOutlined style={styles.icon} />
      <Title level={2} style={styles.title}>Quotes</Title>
      <Paragraph style={styles.paragraph}>
        Create and manage customer quotes.
      </Paragraph>
      <Button type="primary" style={styles.button} onClick={() => alert("Manage Quotes!")}>
        Manage Quotes
      </Button>
    </div>
  );
};

export default Quote;
