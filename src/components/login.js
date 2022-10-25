import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

function AppLogin() {
    
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    return ( 
        
            <div className='login-block'>
        <div className='loginHolder'>
    <Form
       
        name="basic"
        style={{width:300}}
        
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Username"
            name="username"
            
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password />
        </Form.Item>
        <div className='blockCenter'>
        <Form.Item
            wrapperCol={{
            offset: 0
            
            }}
            
        >
            <Button style={{width:100}} type="primary" htmlType="submit">
            Login
            </Button>
        </Form.Item>
        </div>
    </Form>
    </div>
    </div>
    
     );
}

export default AppLogin;