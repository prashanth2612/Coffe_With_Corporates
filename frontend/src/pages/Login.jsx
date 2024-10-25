import { Form,Button } from 'antd';
import LoginForm from './../forms/LoginForm';


const Login = () => {
  return (
   <>
    <LoginForm/>
    <Form layout="vertical" name="normal_login" initialValues={{ remember: true }} className='login-form'>
    
    <Form.Item>
      <Button type="primary" htmlType="submit" size="large">
        Log in
      </Button>
    </Form.Item>
  </Form>
 
   </>
  )
}

export default Login