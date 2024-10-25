import { Select, Tag } from 'antd';
import { generate as uniqueId } from 'shortid';

const options = [
  { value: 'option1', label: 'Option 1', color: 'green' },
  { value: 'option2', label: 'Option 2', color: 'blue' },
  { value: 'option3', label: 'Option 3', color: 'orange' },
  { value: 'option4', label: 'Option 4', color: 'red' },
];

export default function SelectTag() {
  return (
    <Select
      defaultValue={options[0].value}
      style={{
        width: '100%',
      }}
    >
      {options.map((option) => (
        <Select.Option key={uniqueId()} value={option.value}>
          <Tag bordered={false} color={option.color}>
            {option.label}
          </Tag>
        </Select.Option>
      ))}
    </Select>
  );
}
