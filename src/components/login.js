import React, {useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

function AppLogin({token,setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userDB, setUserDB] = useState({});
    // usestate langsung ke username aja yang akan dimunculin, nggak usah save object nya.. dilepas aja satu2

    const [userUsername, setUserUsername] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    
    
    const getUserDetail = (username) => {
        axios({
            method:"GET",
            url: "https://fakestoreapi.com/users",

        }).then(res => {
            console.log(typeof(res));
            console.log(username);
            console.log(
                res.data
            );
            console.log(
                res.data.filter((val) => {return val.username === username})
            )
            const val2 = res.data.filter((val) => {return val.username === username})[0];
            console.log("val2");
            console.log(val2);
            console.log("val2 username");
            console.log(val2.username);
            setUserDB(
                ...userDB,
                ...val2
            );
            console.log("userDB");
            console.log(userDB);
        })
    }
    
    
    
    const loginHandler = () => {
        

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
            localStorage.setItem('userToken', res.data.token);
            getUserDetail(username);
            console.log("userDB");
            console.log(userDB);
            
        }).catch(err => {
            console.log(err.response.data);
            setError(err.response.data);
        })

        setError("");
        setPassword("");
        setUsername("");

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
            label="Username"
            name="username"
            
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input value={username} onChange={(e) => setUsername(e.target.value)}/>
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
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)}/>
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