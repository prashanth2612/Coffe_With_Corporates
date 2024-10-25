import {Button, Form} from "antd"

export default function CreateForm(formElements){
  return (
    <div>
      <Form >
        {formElements}
        <Button>Create Form</Button>
      </Form>
    </div>
  )
}