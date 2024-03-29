import React, {useState, useEffect} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import {redirect, Navigate, useNavigate} from 'react-router-dom';

function AppLogin({setToken,parentSetUsername,parentSetPassword, parentSetUserFirstName, parentSetUserLastName, parentSetUserEmail, parentSetUserObj}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [newToken, setNewToken] = useState(null);
    let navigate = useNavigate();
   
    
  
    
    
    
    const loginHandler = () => {
        
        setError("");
        setPassword("");
        setUsername("");
        
        axios({
            method: "POST",
            url: "https://fakestoreapi.com/auth/login",
            data:{
                username: username,
                password: password
            }
        }).then(res => {
            console.log(res.data.token);
            
            
            


            setToken(res.data.token);
            setNewToken(res.data.token);
            localStorage.setItem('userToken', res.data.token);
            
            localStorage.setItem('username', username);

            if(res.data.token){
                return(navigate("/product"));
            }

           
            


        }).catch(err => {
            console.log(err.response.data);
            setError(err.response.data);
        })

              
        
            
        

        
        
    }

    

    
    // const onFinish = (values) => {
    //     console.log('Success:', values);
    //   };
    //   const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    //   };
    
    return ( 
        
            <div className='login-block'>
        <div className='loginHolder'>
    <Form
       
        name="basic"
        style={{width:300}}
        
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            // label="Username"
            name="username"
            
            rules={[
            {
                required: true,
                message: 'Please input your username!',
                
            },
            ]}
        >
            <Input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </Form.Item>

        <Form.Item
            // label="Password"
            name="password"
            
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Item>
        {error && <small>{error}</small>}
        <div className='blockCenter'>
        <Form.Item
            wrapperCol={{
            offset: 0
            
            }}
            
        >
            <Button onClick={loginHandler} style={{width:100}} type="primary" htmlType="submit">
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