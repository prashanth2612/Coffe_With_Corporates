import { Form, InputNumber } from 'antd';
export default function MoneyInputForm(){
    return(
        <Form.Item>
            <InputNumber
        className="moneyInput"
        value={"Dollar"}
        controls={false}
        />
            
        </Form.Item>
    )
}