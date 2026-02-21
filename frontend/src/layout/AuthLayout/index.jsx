import React from 'react';
import { Layout, Row, Col } from 'antd';
import { selectLangDirection } from '@/redux/translate/selectors';
import { useSelector } from 'react-redux';

export default function AuthLayout({ sideContent, children }) {
  const langDirection = useSelector(selectLangDirection);

  return (
    <Layout
      style={{ textAlign: langDirection === 'rtl' ? 'right' : 'left', direction: langDirection, minHeight: '100vh' }}
    >
      <Row style={{ minHeight: '100vh' }}>
        <Col
          xs={{ span: 0, order: 2 }}
          sm={{ span: 0, order: 2 }}
          md={{ span: 11, order: 1 }}
          lg={{ span: 12, order: 1 }}
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(145deg, #2C1810 0%, #4A2C1A 45%, #6F4E37 100%)',
          }}
        >
          {sideContent}
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 13, order: 2 }}
          lg={{ span: 12, order: 2 }}
          style={{ background: '#FAFAF8', minHeight: '100vh' }}
        >
          {children}
        </Col>
      </Row>
    </Layout>
  );
}
