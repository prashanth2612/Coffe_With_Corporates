import { Tabs, Row, Col } from 'antd';

const SettingsLayout = () => {
  return (
    <Col className="gutter-row" order={0}>
      <div className="whiteBox shadow" style={{ minHeight: '480px' }}>
        <div className="pad40">
          <p>This is static content inside the settings layout.</p>
        </div>
      </div>
    </Col>
  );
};

const TopCard = () => {
  return (
    <div
      className="whiteBox shadow"
      style={{
        color: '#595959',
        fontSize: 13,
        height: '70px',
        minHeight: 'auto',
        marginBottom: '24px',
      }}
    >
      <div className="pad20 strong" style={{ textAlign: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#22075e', marginBottom: 0, marginTop: 0 }}>Page Title</h2>
      </div>
    </div>
  );
};

const RightMenu = () => {
  return (
    <Col
      className="gutter-row"
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 7 }}
      lg={{ span: 6 }}
      order={1}
    >
      <TopCard />
      <div className="whiteBox shadow">
        <div className="pad25" style={{ width: '100%', paddingBottom: 0 }}>
          <p>Static content in the right menu.</p>
        </div>
      </div>
    </Col>
  );
};

export default function TabsContent() {
  const content = [
    { label: 'Tab 1', children: <p>Content for Tab 1</p> },
    { label: 'Tab 2', children: <p>Content for Tab 2</p> },
    { label: 'Tab 3', children: <p>Content for Tab 3</p> },
  ];

  const items = content.map((item, index) => {
    return {
      key: index + '_tab',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ paddingRight: 30 }}>{item.label}</span>
        </div>
      ),
      children: <SettingsLayout>{item.children}</SettingsLayout>,
    };
  });

  const renderTabBar = (props, DefaultTabBar) => (
    <RightMenu>
      <DefaultTabBar {...props} />
    </RightMenu>
  );

  return (
    <Row gutter={[24, 24]} className="tabContent">
      <Tabs tabPosition="right" defaultActiveKey="0_tab" items={items} renderTabBar={renderTabBar} />
    </Row>
  );
}
