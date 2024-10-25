import React from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';
import { SmileOutlined, UserOutlined, ShoppingCartOutlined, FileTextOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const styles = {
    header: {
      backgroundColor: '#ffffff', // Change header color to white
      color: '#333', // Darker text color for visibility
      textAlign: 'center',
      padding: '1px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    container: {
      padding: '20px',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh',
    },
    card: {
      margin: '10px',
      textAlign: 'center',
      transition: 'transform 0.3s',
      borderRadius: '10px',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    icon: {
      fontSize: '32px',
      color: '#1890ff',
    },
    welcomeText: {
      textAlign: 'center',
      marginBottom: '20px',
    },
  };

  return (
    <Layout>
      <Header style={styles.header}>
        <Title level={1} style={{ color: '#333' }}>Dashboard</Title> {/* Darker color for header text */}
      </Header>
      <Content style={styles.container}>
        <Title level={3} style={styles.welcomeText}>Welcome to your Dashboard!</Title>
        <Row gutter={16} justify="center">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={styles.card}
              hoverable
              bodyStyle={{ padding: '20px' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <SmileOutlined style={styles.icon} />
              <Title level={4}>Happy Users</Title>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>120</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={styles.card}
              hoverable
              bodyStyle={{ padding: '20px' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <UserOutlined style={styles.icon} />
              <Title level={4}>Total Users</Title>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>1,500</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={styles.card}
              hoverable
              bodyStyle={{ padding: '20px' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ShoppingCartOutlined style={styles.icon} />
              <Title level={4}>Orders</Title>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>350</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={styles.card}
              hoverable
              bodyStyle={{ padding: '20px' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <FileTextOutlined style={styles.icon} />
              <Title level={4}>Reports</Title>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>10</p>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Dashboard;
