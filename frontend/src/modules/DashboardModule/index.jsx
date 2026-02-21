import { useEffect } from 'react';
import { Tag, Row, Col, Progress, Timeline, Avatar } from 'antd';
import {
  ArrowUpOutlined, ArrowDownOutlined, DollarOutlined, TeamOutlined,
  FileTextOutlined, CheckCircleOutlined, ClockCircleOutlined,
  RiseOutlined, CoffeeOutlined, ThunderboltOutlined, FileSyncOutlined,
} from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';
import { useMoney } from '@/settings';
import { request } from '@/request';
import useFetch from '@/hooks/useFetch';
import useOnFetch from '@/hooks/useOnFetch';
import { tagColor } from '@/utils/statusTagColor';
import RecentTable from './components/RecentTable';
import SummaryCard from './components/SummaryCard';
import PreviewCard from './components/PreviewCard';
import CustomerPreviewCard from './components/CustomerPreviewCard';
import { selectMoneyFormat } from '@/redux/settings/selectors';
import { useSelector } from 'react-redux';

// ─── Static widgets data ──────────────────────────────────────────────────────
const PIPELINE_STAGES = [
  { stage: 'New Lead',     count: 12, color: '#6F4E37', pct: 100 },
  { stage: 'Qualified',    count: 8,  color: '#C9853A', pct: 66  },
  { stage: 'Proposal Sent',count: 5,  color: '#D4A96A', pct: 41  },
  { stage: 'Negotiation',  count: 3,  color: '#F5C842', pct: 25  },
  { stage: 'Closed Won',   count: 2,  color: '#52c41a', pct: 16  },
];

const RECENT_ACTIVITY = [
  { color: '#52c41a', label: 'Invoice #1005 marked as Paid',          time: '2 min ago'  },
  { color: '#C9853A', label: 'New lead: Reliance Industries added',    time: '1 hr ago'   },
  { color: '#1890ff', label: 'Quote #2002 accepted by Infosys',        time: '3 hrs ago'  },
  { color: '#f5222d', label: 'Invoice #1003 payment overdue',          time: 'Yesterday'  },
  { color: '#722ed1', label: 'New client Wipro Technologies onboarded',time: 'Yesterday'  },
  { color: '#52c41a', label: 'Invoice #1002 paid by Infosys',          time: '2 days ago' },
];

const TOP_CLIENTS = [
  { name: 'Tata Consultancy Services', value: '$12,500', tag: 'Active',  color: 'green'   },
  { name: 'Infosys Limited',           value: '$9,440',  tag: 'Active',  color: 'green'   },
  { name: 'Wipro Technologies',        value: '$5,500',  tag: 'Partial', color: 'orange'  },
  { name: 'Rohan Sharma',              value: '$8,024',  tag: 'Paid',    color: 'blue'    },
  { name: 'Aisha Patel',               value: '$3,200',  tag: 'Draft',   color: 'default' },
];

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ title, value, trend, trendVal, color, icon }) {
  const up = trend === 'up';
  return (
    <div style={{
      background: '#fff', borderRadius: 12, padding: '20px 24px',
      boxShadow: '0 1px 8px rgba(44,24,16,0.07)', borderTop: `3px solid ${color}`, height: '100%',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ color: '#8c8c8c', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
            {title}
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#1a1a1a', lineHeight: 1 }}>{value}</div>
          {trendVal && (
            <div style={{ marginTop: 8, fontSize: 12, color: up ? '#52c41a' : '#f5222d', display: 'flex', alignItems: 'center', gap: 3 }}>
              {up ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {trendVal} vs last month
            </div>
          )}
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: 10, background: `${color}18`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color,
        }}>{icon}</div>
      </div>
    </div>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionIcon({ icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
      <span style={{ color: '#C9853A', fontSize: 15 }}>{icon}</span>
      <h3 style={{ margin: 0, fontWeight: 700, fontSize: 14, color: '#2C1810' }}>{label}</h3>
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 12, padding: '20px 24px',
      boxShadow: '0 1px 8px rgba(44,24,16,0.07)', height: '100%', ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function DashboardModule() {
  const translate = useLanguage();
  const { moneyFormatter } = useMoney();
  const money_format_settings = useSelector(selectMoneyFormat);

  const getStatsData = async ({ entity, currency }) =>
    await request.summary({ entity, options: { currency } });

  const { result: invoiceResult, isLoading: invoiceLoading, onFetch: fetchInvoicesStats } = useOnFetch();
  const { result: quoteResult,   isLoading: quoteLoading,   onFetch: fetchQuotesStats   } = useOnFetch();
  const { result: offerResult,   isLoading: offerLoading,   onFetch: fetchOffersStats   } = useOnFetch();
  const { result: clientResult,  isLoading: clientLoading } = useFetch(() =>
    request.summary({ entity: 'client' })
  );

  useEffect(() => {
    const currency = money_format_settings?.default_currency_code || 'USD';
    fetchInvoicesStats(getStatsData({ entity: 'invoice', currency }));
    fetchQuotesStats(getStatsData({ entity: 'quote',   currency }));
    fetchOffersStats(getStatsData({ entity: 'offer',   currency }));
  }, [money_format_settings?.default_currency_code]);

  const dataTableColumns = [
    { title: translate('number'), dataIndex: 'number' },
    { title: translate('Client'), dataIndex: ['client', 'name'] },
    {
      title: translate('Total'), dataIndex: 'total',
      onCell: () => ({ style: { textAlign: 'right', whiteSpace: 'nowrap', direction: 'ltr' } }),
      render: (total, record) => moneyFormatter({ amount: total, currency_code: record.currency }),
    },
    {
      title: translate('Status'), dataIndex: 'status',
      render: (status) => <Tag color={tagColor(status)?.color}>{translate(status)}</Tag>,
    },
  ];

  const statisticCards = [
    { result: invoiceResult, isLoading: invoiceLoading, entity: 'invoice', title: translate('Invoices') },
    { result: quoteResult,   isLoading: quoteLoading,   entity: 'quote',   title: translate('proforma invoices') },
    { result: offerResult,   isLoading: offerLoading,   entity: 'offer',   title: translate('offers') },
  ];

  return (
    <div style={{ paddingBottom: 40 }}>

      {/* ── Welcome banner ───────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, #2C1810 0%, #6F4E37 60%, #C9853A 100%)',
        borderRadius: 16, padding: '24px 32px', marginBottom: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', right: -10, top: -20, fontSize: 150, opacity: 0.05, color: '#fff' }}>
          <CoffeeOutlined />
        </div>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 4 }}>Welcome back 👋</div>
          <h2 style={{ color: '#fff', margin: 0, fontSize: 20, fontWeight: 700 }}>Coffee With Corporates</h2>
          <div style={{ color: 'rgba(212,169,106,0.85)', fontSize: 13, marginTop: 4 }}>
            Here's what's brewing in your business today
          </div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 20px',
          backdropFilter: 'blur(8px)', textAlign: 'center',
        }}>
          <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11, marginBottom: 6 }}>Monthly Target</div>
          <Progress type="circle" percent={75} size={64} strokeColor="#C9853A"
            trailColor="rgba(255,255,255,0.15)"
            format={p => <span style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>{p}%</span>}
          />
        </div>
      </div>

      {/* ── NEW: 4 quick stat cards ───────────────────────────────────── */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <StatCard title="Total Revenue" color="#6F4E37" icon={<DollarOutlined />}
            value={moneyFormatter({ amount: invoiceResult?.total || 38164 })}
            trend="up" trendVal="+14%" />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard title="Unpaid Balance" color="#f5222d" icon={<FileTextOutlined />}
            value={moneyFormatter({ amount: invoiceResult?.total_undue || 15700 })}
            trend="down" trendVal="-8%" />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard title="Active Clients" color="#C9853A" icon={<TeamOutlined />}
            value={`${clientResult?.active || 4}`} trend="up" trendVal="+2" />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard title="Quotes Sent" color="#1890ff" icon={<RiseOutlined />}
            value={moneyFormatter({ amount: quoteResult?.total || 30510 })}
            trend="up" trendVal="+22%" />
        </Col>
      </Row>

      {/* ── ORIGINAL ROW 1: Summary cards (Invoices / Proforma / Offers / Unpaid) */}
      <Row gutter={[32, 32]}>
        <SummaryCard
          title={translate('Invoices')} tagColor="cyan"
          prefix={translate('This month')} isLoading={invoiceLoading} data={invoiceResult?.total}
        />
        <SummaryCard
          title={translate('proforma invoices')} tagColor="purple"
          prefix={translate('This month')} isLoading={quoteLoading} data={quoteResult?.total}
        />
        <SummaryCard
          title={translate('offers')} tagColor="green"
          prefix={translate('This month')} isLoading={offerLoading} data={offerResult?.total}
        />
        <SummaryCard
          title={translate('Unpaid')} tagColor="red"
          prefix={translate('Not Paid')} isLoading={invoiceLoading} data={invoiceResult?.total_undue}
        />
      </Row>

      <div className="space30" />

      {/* ── ORIGINAL ROW 2: Status preview cards + Customer card ─────── */}
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }}>
          <div className="whiteBox shadow" style={{ height: 458 }}>
            <Row className="pad20" gutter={[0, 0]}>
              {statisticCards.map((data, index) => (
                <PreviewCard
                  key={index}
                  title={data.title}
                  isLoading={data.isLoading}
                  entity={data.entity}
                  statistics={
                    !data.isLoading && data.result?.performance?.map((item) => ({
                      tag: item?.status, color: 'blue', value: item?.percentage,
                    }))
                  }
                />
              ))}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }}>
          <CustomerPreviewCard
            isLoading={clientLoading}
            activeCustomer={clientResult?.active}
            newCustomer={clientResult?.new}
          />
        </Col>
      </Row>

      <div className="space30" />

      {/* ── NEW: Pipeline + Activity + Top Clients ───────────────────── */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={8}>
          <Card>
            <SectionIcon icon={<ThunderboltOutlined />} label="Sales Pipeline" />
            {PIPELINE_STAGES.map((s) => (
              <div key={s.stage} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 12, color: '#595959' }}>{s.stage}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#2C1810' }}>{s.count}</span>
                </div>
                <Progress percent={s.pct} showInfo={false} strokeColor={s.color} trailColor="#f5f0eb" strokeWidth={6} />
              </div>
            ))}
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card>
            <SectionIcon icon={<ClockCircleOutlined />} label="Recent Activity" />
            <Timeline items={RECENT_ACTIVITY.map(a => ({
              color: a.color,
              children: (
                <div>
                  <div style={{ fontSize: 12, color: '#262626', lineHeight: 1.4 }}>{a.label}</div>
                  <div style={{ fontSize: 11, color: '#bfbfbf', marginTop: 2 }}>{a.time}</div>
                </div>
              ),
            }))} />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card>
            <SectionIcon icon={<TeamOutlined />} label="Top Clients" />
            {TOP_CLIENTS.map((c, i) => (
              <div key={c.name} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0',
                borderBottom: i < TOP_CLIENTS.length - 1 ? '1px solid #f5f0eb' : 'none',
              }}>
                <Avatar size={32} style={{ background: `hsl(${25 + i * 15}, 60%, ${45 + i * 5}%)`, flexShrink: 0, fontSize: 12 }}>
                  {c.name.charAt(0)}
                </Avatar>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#262626', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: '#8c8c8c' }}>{c.value}</div>
                </div>
                <Tag color={c.color} style={{ fontSize: 10, margin: 0 }}>{c.tag}</Tag>
              </div>
            ))}
          </Card>
        </Col>
      </Row>

      {/* ── ORIGINAL ROW 3: Recent Invoices + Recent Quotes ──────────── */}
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} lg={{ span: 12 }}>
          <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
            <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>
              {translate('Recent Invoices')}
            </h3>
            <RecentTable entity="invoice" dataTableColumns={dataTableColumns} />
          </div>
        </Col>
        <Col className="gutter-row w-full" sm={{ span: 24 }} lg={{ span: 12 }}>
          <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
            <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>
              {translate('Recent Quotes')}
            </h3>
            <RecentTable entity="quote" dataTableColumns={dataTableColumns} />
          </div>
        </Col>
      </Row>

    </div>
  );
}