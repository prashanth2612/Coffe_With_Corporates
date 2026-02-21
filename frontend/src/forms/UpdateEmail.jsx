import { Form, Input } from 'antd';
import useLanguage from '@/locale/useLanguage';

export default function UpdateEmailForm() {
  const translate = useLanguage();

  return (
    <>
      <Form.Item
        label={translate('Subject')}
        name="emailSubject"
        rules={[{ required: true }]}
      >
        <Input placeholder={translate('Enter email subject')} />
      </Form.Item>

      <Form.Item
        label={translate('email Content')}
        name="emailBody"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={8} placeholder={translate('Enter email content')} />
      </Form.Item>
    </>
  );
}
