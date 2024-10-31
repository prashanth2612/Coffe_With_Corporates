import React from 'react';
import { Button, Typography } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';
import DataTable from '@/components/DataTable';

const { Title, Paragraph } = Typography;

const Index = () => {
  return (
     <div> 
      <DataTable title={"COMPANY PAGE"}/>
     <div style={styles.container}>
       <CustomerServiceOutlined style={styles.icon} />
       <Title level={2} style={styles.title}>Welcome to the Company Page!</Title>
       <Paragraph style={styles.paragraph}>
         Here you can manage customer information, track interactions, and provide support.
       </Paragraph>
       <Button type="primary" style={styles.button} onClick={() => alert("Button Clicked!")}>
         Get Started
       </Button>
 
     </div></div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    fontSize: '48px',
    color: '#1890ff',
    marginBottom: '20px',
  },
  title: {
    color: '#333',
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    marginTop: '10px',
  },
};

export default Index;
