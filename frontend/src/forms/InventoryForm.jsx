import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import useLanguage from '@/locale/useLanguage';

export default function InventoryForm() {
  const translate = useLanguage();

  return (
    <>
      <Form.Item
        label={translate('Product')}
        name="product"
        rules={[
          {
            required: true,
            message: 'Please input the product name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('SKU')}
        name="sku"
      >
        <Input placeholder="e.g. SKU-001" />
      </Form.Item>

      <Form.Item
        label={translate('Category')}
        name="category"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('Quantity')}
        name="quantity"
        rules={[
          {
            required: true,
            message: 'Please input the quantity!',
          },
        ]}
        initialValue={0}
      >
        <InputNumber min={0} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label={translate('Unit Price')}
        name="unitPrice"
        rules={[
          {
            required: true,
            message: 'Please input the unit price!',
          },
        ]}
        initialValue={0}
      >
        <InputNumber
          min={0}
          precision={2}
          style={{ width: '100%' }}
          formatter={(value) => `$ ${value}`}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
        />
      </Form.Item>

      <Form.Item
        label={translate('Location')}
        name="location"
      >
        <Input placeholder="e.g. Warehouse A, Shelf 3" />
      </Form.Item>

      <Form.Item
        label={translate('Description')}
        name="description"
      >
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item
        label={translate('notes')}
        name="notes"
      >
        <Input.TextArea rows={2} />
      </Form.Item>
    </>
  );
}
