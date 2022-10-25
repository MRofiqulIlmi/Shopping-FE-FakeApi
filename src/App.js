import './App.css';
import 'antd/dist/antd.css';
import {Layout } from 'antd';
import React from 'react';
import AppHeader from './components/header';
import AppProducts from './components/products';

const { Header, Content } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader/>
    </Header>
    <Content>
      <AppProducts />
    </Content>

  </Layout>
  );
}

export default App;