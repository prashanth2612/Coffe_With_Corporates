import { Statistic, Progress, Divider, Row, Spin } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';

export default function CustomerPreviewCard({
  isLoading = false,
  activeCustomer,
  newCustomer,
}) {
  const translate = useLanguage();

  // Guard against undefined / null / NaN
  const safeActive = isNaN(Number(activeCustomer)) ? 0 : Number(activeCustomer);
  const safeNew = isNaN(Number(newCustomer)) ? 0 : Number(newCustomer);
  // Progress percent must be 0-100
  const progressPercent = Math.min(100, Math.max(0, safeNew));

  return (
    <Row className="gutter-row">
      <div className="whiteBox shadow" style={{ height: 458 }}>
        <div
          className="pad20"
          style={{
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <h3 style={{ color: '#22075e', marginBottom: 40, marginTop: 15, fontSize: 'large' }}>
            {translate('Customers')}
          </h3>

          {isLoading ? (
            <Spin />
          ) : (
            <div style={{ display: 'grid', justifyContent: 'center' }}>
              <Progress type="dashboard" percent={progressPercent} size={148} />
              <p>{translate('New Customer this Month')}</p>
              <Divider />
              <Statistic
                title={translate('Active Customers')}
                value={safeActive}
                precision={0}
                valueStyle={{ color: safeActive > 0 ? '#3f8600' : '#000000' }}
                prefix={safeActive > 0 ? <ArrowUpOutlined /> : null}
              />
            </div>
          )}
        </div>
      </div>
    </Row>
  );
}
