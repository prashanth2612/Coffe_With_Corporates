import { Layout, Typography } from 'antd';
import logo from '@/style/images/logo-text.svg';
import useLanguage from '@/locale/useLanguage';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();

  return (
    <Content
      style={{
        padding: '80px 40px 40px',
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        {/* Logo */}
        <img
          src={logo}
          alt="Coffee With Corporates"
          style={{
            margin: '0 0 48px',
            display: 'block',
            filter: 'brightness(0) invert(1)',
            opacity: 0.95,
          }}
          height={52}
          width={210}
        />

        {/* Headline */}
        <Title
          level={1}
          style={{
            fontSize: '2.2rem',
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: '16px',
            fontFamily: "Georgia, 'Book Antiqua', Palatino, serif",
          }}
        >
          Your Business,
          <br />
          Perfectly Brewed.
        </Title>

        {/* Subtitle */}
        <Text
          style={{
            fontSize: '15px',
            lineHeight: '1.7',
            display: 'block',
            marginBottom: '40px',
            opacity: 0.85,
          }}
        >
          Manage clients, invoices, leads and payments — all in one place.
        </Text>

        {/* Feature bullets */}
        <ul className="list-checked" style={{ marginBottom: 0 }}>
          {[
            'Client & Lead management',
            'Professional invoicing & payments',
            'Sales pipeline & offers',
            'Team settings & roles',
          ].map((feat) => (
            <li
              key={feat}
              className="list-checked-item list-checked-item-left"
              style={{ paddingLeft: '1.8rem' }}
            >
              {feat}
            </li>
          ))}
        </ul>

        {/* Tagline */}
        <div
          style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(212, 169, 106, 0.25)',
            opacity: 0.65,
            fontSize: '13px',
            letterSpacing: '0.5px',
          }}
        >
          COFFEE WITH CORPORATES · ERP / CRM PLATFORM
        </div>
      </div>
    </Content>
  );
}
