import { Button, Form } from 'antd';

export default function UpdateForm() {
  const onSubmit = (fieldsValue) => {
    console.log(fieldsValue); // Handle form submission
  };

  return (
    <div style={{ display: 'block', opacity: 1 }}>
      <Form layout="vertical" onFinish={onSubmit}>
        
        <Form.Item
          style={{
            display: 'inline-block',
            paddingRight: '5px',
          }}
        >
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
        <Form.Item
          style={{
            display: 'inline-block',
            paddingLeft: '5px',
          }}
        >
          <Button>Cancel</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
