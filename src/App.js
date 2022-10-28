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
      <AppHeader setToken={setToken} loginStatus={loginStatus}/>
    </Header>
    <Content>
      {token? <AppProducts />: <AppLogin token={token} setToken={setToken} />}
      
    </Content>
    <Footer>
      <AppFooter />
    </Footer>

  </Layout>
  );
}

export default App;