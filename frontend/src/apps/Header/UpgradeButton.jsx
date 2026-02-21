import { Button, Badge } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';

export default function UpgradeButton() {
  const translate = useLanguage();

  return (
    <Badge count={0} size="small">
      <Button
        type="primary"
        style={{
          float: 'right',
          marginTop: '5px',
          cursor: 'pointer',
          background: '#16923e',
          boxShadow: '0 2px 0 rgb(82 196 26 / 20%)',
        }}
        icon={<GithubOutlined />}
        onClick={() => {
          window.open('https://github.com/prashanth2612');
        }}
      >
        GitHub
      </Button>
    </Badge>
  );
}
