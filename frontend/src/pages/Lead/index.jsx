import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';
import useLanguage from '@/locale/useLanguage';
import { Tag } from 'antd';
import { countryList } from '@/utils/countryList';

function countryLabel(code) {
  if (!code) return '';
  const found = countryList.find((c) => c.value === code);
  return found ? `${found.icon} ${found.label}` : code;
}

const STATUS_COLORS = {
  draft: 'default',
  new: 'blue',
  'in negociation': 'purple',
  won: 'green',
  loose: 'red',
  canceled: 'crimson',
  assigned: 'cyan',
  'on hold': 'orange',
  waiting: 'gold',
};

const SOURCE_COLORS = {
  linkedin: 'geekblue',
  socialmedia: 'cyan',
  website: 'volcano',
  advertising: 'green',
  friend: 'red',
  'professionals network': 'purple',
  'customer referral': 'magenta',
  sales: 'pink',
  other: 'default',
};

export default function Lead() {
  const translate = useLanguage();
  const entity = 'lead';

  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
  };
  const deleteModalLabels = ['name'];

  const Labels = {
    PANEL_TITLE: translate('lead'),
    DATATABLE_TITLE: translate('lead_list'),
    ADD_NEW_ENTITY: translate('add_new_lead'),
    ENTITY_NAME: translate('lead'),
  };

  const dataTableColumns = [
    {
      title: translate('Type'),
      dataIndex: 'type',
      render: (value) => (
        <Tag bordered={false} color={value === 'people' ? 'magenta' : 'blue'}>{value}</Tag>
      ),
      width: 100,
    },
    {
      title: translate('Name'),
      dataIndex: 'name',
      render: (value) => <strong>{value || '—'}</strong>,
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
      render: (value) => (
        <Tag bordered={false} color={STATUS_COLORS[value] || 'default'}>
          {value ? translate(value) : '—'}
        </Tag>
      ),
    },
    {
      title: translate('Source'),
      dataIndex: 'source',
      render: (value) => value ? (
        <Tag bordered={false} color={SOURCE_COLORS[value] || 'default'}>{translate(value)}</Tag>
      ) : '—',
    },
    {
      title: translate('Phone'),
      dataIndex: 'phone',
      render: (value) => value || '—',
    },
    {
      title: translate('email'),
      dataIndex: 'email',
      render: (value) => value ? <a href={`mailto:${value}`}>{value}</a> : '—',
    },
    {
      title: translate('country'),
      dataIndex: 'country',
      render: (value) => countryLabel(value) || '—',
    },
  ];

  const config = {
    entity,
    ...Labels,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
    fields,
  };

  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}