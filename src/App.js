import './App.css';
import 'antd/dist/antd.css';
import {Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import AppHeader from './components/header';
import AppProducts from './components/products';
import AppFooter from './components/footer';
import AppLogin from './components/login';


const { Header, Content, Footer } = Layout;


function App() {

  const[token, setToken] = useState(localStorage.getItem('userToken')?? null);
  const[loginStatus, setLoginStatus] = useState(false);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if(token){
      setLoginStatus(true);
    }else{
      setLoginStatus(false);
    }
  })




  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader setToken={setToken} loginStatus={loginStatus} 
      userFirstName={userFirstName} 
      userLastName={userLastName}
      setUserFirstName={setUserFirstName}
      setUserLastName={setUserLastName}
      />
    </Header>
    <Content>
      {token? <AppProducts />: <AppLogin token={token} setToken={setToken} 
      parentSetUsername={setUsername}
      parentSetPassword={setPassword}
      parentSetUserFirstName={setUserFirstName}
      parentSetUserLastName={setUserLastName}
      parentSetUserEmail={setUserEmail}
      
      
      />}
      
    </Content>
    <Footer>
      <AppFooter />
    </Footer>

  </Layout>
  );
}

export default App;