import './App.css';
import 'antd/dist/antd.css';
import {Layout } from 'antd';
import React from 'react';
import AppHeader from './components/header';

const { Header } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader/>
      
    </Header>
  </Layout>
  );
}

export default App;