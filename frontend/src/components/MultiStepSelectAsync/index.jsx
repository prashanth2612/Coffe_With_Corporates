import { Select, Space } from 'antd';

const { Option } = Select;

const MultiStepSelectAsync = () => {
  return (
    <Space direction="vertical" style={{ width: 200 }}>
      <Select placeholder="Select an option">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
      <Select placeholder="Select another option">
        <Option value="optionA">Option A</Option>
        <Option value="optionB">Option B</Option>
        <Option value="optionC">Option C</Option>
      </Select>
    </Space>
  );
};

export default MultiStepSelectAsync;
