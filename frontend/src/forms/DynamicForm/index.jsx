/*******************************************
 *!!!!!!!!!!!! DYNAMIC FORM !!!!!!!!!!!!!!!!
 *******************************************
 * ? It will recive my dynamic fields
 * ! SELECT WITH TRANSLATION COMPONENT
 * ! SELECT WITH FEEDBACK COMPONENT
 * ! COLOR COMPONENT
 * ! TAG COMPONENT
 * ! ARRAY COMPONENT
 * ! COUNTRY COMPONENT
 * ! SEARCH COMPONENT
 * ! FORM ITEM COMPONENT
 * ! COMPUNDED COMPONENT
 * ! FILED TYPE
 * ! CUSTOM FORM ITEM
 */

 import {  Form, Select } from 'antd';
 import { generate as uniqueId } from 'shortid';
 export default function DynamicForm({fields,isUpdateForm=false}){

  return(


    <div>
      {
       Object.keys(fields).map(()=>{
        let field = fields[key];

        if((isUpdateForm && !field.disableForUpdate)|| !field.disableForForm){
          field.name = key;
          if(!field.label)field.label = key;
          if(field.hasFeedback)
            return(
          <FormElement feedback={feedback} setFeedback={setFeedback} key={key} field={field}/>
        );
        else if(feedback && field.feedback){
          if(feedback==field.feedback) return <FormElement key={key} field={field} />;
        }

        else{
          return <FormElement key={key} field={field} />;
        }
        }
       })
      }
    </div>
    

  )


 }

 function FormElement({ field, feedback, setFeedback }) {

  const SelectWithFeedbackComponent = ({ feedbackValue, lanchFeedback }) => (
    <Form.Item
      label={(field.label)}
      name={field.name}
      rules={[
        {
          required: field.required || false,
          type: filedType[field.type] ?? 'any',
        },
      ]}
    >
      <Select
        onSelect={(value) => lanchFeedback(value)}
        value={feedbackValue}
        style={{
          width: '100%',
        }}
      >
        {field.options?.map((option) => (
          <Select.Option key={`${uniqueId()}`} value={option.value}>
            {(option.label)}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );

 }