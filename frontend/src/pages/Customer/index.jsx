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

export default function Customer() {
  const translate = useLanguage();
  const entity = 'client';

  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
  };
  const deleteModalLabels = ['name'];

  const Labels = {
    PANEL_TITLE: translate('client'),
    DATATABLE_TITLE: translate('client_list'),
    ADD_NEW_ENTITY: translate('add_new_client'),
    ENTITY_NAME: translate('client'),
  };

  // Explicit table columns with proper rendering
  const dataTableColumns = [
    {
      title: translate('Type'),
      dataIndex: 'type',
      render: (value) => {
        const color = value === 'people' ? 'magenta' : 'blue';
        return <Tag bordered={false} color={color}>{value}</Tag>;
      },
      width: 100,
    },
    {
      title: translate('Name'),
      dataIndex: 'name',
      render: (value) => <strong>{value || '—'}</strong>,
    },
    {
      title: translate('Phone'),
      dataIndex: 'phone',
      render: (value) => value || '—',
    },
    {
      title: translate('email'),
      dataIndex: 'email',
      render: (value) => value ? (
        <a href={`mailto:${value}`}>{value}</a>
      ) : '—',
    },
    {
      title: translate('country'),
      dataIndex: 'country',
      render: (value) => countryLabel(value) || '—',
    },
    {
      title: translate('website'),
      dataIndex: 'website',
      render: (value) => value ? (
        <a href={value.startsWith('http') ? value : `https://${value}`} target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : '—',
    },
  ];

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
    fields, // still needed for read panel
  };

  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}