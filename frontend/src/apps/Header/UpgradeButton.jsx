import { Avatar, Popover, Button, Badge, List } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

const PurchasePlans = () => {
  const features = [
    'Self-Hosted Premium Version',
    'Unlimited Users',
    'Multi-Currency - Unlimited Currency',
    'Multi-Branch - Unlimited Branch',
    'Free 1-year Update',
    '24/7 Priority Support',
  ];

  return (
    <List
      size="large"
      footer={
        <Button
          type="primary"
          size="large"
          block
          onClick={() => {
            window.open('https://www.google.com', '_blank');
          }}
        >
          Purchase Now
        </Button>
      }
      dataSource={features}
      renderItem={(item) => (
        <List.Item style={{ textAlign: 'center' }}>{item}</List.Item>
      )}
    />
  );
};

const UpgradeButton = () => {
  const Content = () => {
    return <PurchasePlans />;
  };

  return (
    <Popover content={<Content />} trigger="click">
      <Badge count={1} size="small">
        <Avatar
          icon={<RocketOutlined />}
          style={{
            color: '#f56a00',
            backgroundColor: '#fff',
            float: 'right',
            marginTop: '5px',
            cursor: 'pointer',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Small shadow for better visibility
          }}
        />
      </Badge>
    </Popover>
  );
};

export default UpgradeButton;



/**
 * ! Translation
 */
