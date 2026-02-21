import React from 'react';

import CrudModule from '@/modules/CrudModule/CrudModule';
import OrderForm from '@/forms/OrderForm';
import useLanguage from '@/locale/useLanguage';

export default function Order() {
  const translate = useLanguage();
  const entity = 'order';
  const searchConfig = {
    displayLabels: ['orderId', 'status'],
    searchFields: 'orderId,products,status',
    outputValue: '_id',
  };

  const deleteModalLabels = ['orderId'];

  const readColumns = [
    {
      title: translate('Order ID'),
      dataIndex: 'orderId',
    },
    {
      title: translate('Products'),
      dataIndex: 'products',
    },
    {
      title: translate('Quantity'),
      dataIndex: 'quantity',
    },
    {
      title: translate('Price'),
      dataIndex: 'price',
      render: (value) => (value != null ? `$ ${value}` : ''),
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
    },
    {
      title: translate('Note'),
      dataIndex: 'notes',
    },
  ];

  const dataTableColumns = [
    {
      title: translate('Order ID'),
      dataIndex: 'orderId',
    },
    {
      title: translate('Products'),
      dataIndex: 'products',
    },
    {
      title: translate('Quantity'),
      dataIndex: 'quantity',
    },
    {
      title: translate('Price'),
      dataIndex: 'price',
      render: (value) => (value != null ? `$ ${value}` : ''),
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('order'),
    DATATABLE_TITLE: translate('order_list'),
    ADD_NEW_ENTITY: translate('add_new_order'),
    ENTITY_NAME: translate('order'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    dataTableColumns,
    readColumns,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
      createForm={<OrderForm />}
      updateForm={<OrderForm isUpdateForm={true} />}
      config={config}
    />
  );
}
