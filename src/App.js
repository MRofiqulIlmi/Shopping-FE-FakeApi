import './App.css';
import 'antd/dist/antd.css';
import {Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import AppHeader from './components/header';
import AppProducts from './components/products';
import AppFooter from './components/footer';
import AppLogin from './components/login';
import AppProfile from './components/profile';
import ProtectedRoute from './components/protectedroute';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";



const { Header, Content, Footer } = Layout;


const val = "APA"




function App() {

  const[token, setToken] = useState(localStorage.getItem('userToken')?? null);
  const[loginStatus, setLoginStatus] = useState(false);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userObj, setUserObj] = useState("");


  console.log("loginStatus");
  console.log(loginStatus);

  console.log("token");
  console.log(token);

  console.log("User obj");
  console.log(userObj);

  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader setToken={setToken} token={token} 
      />
    </Header>
    <Content>

      

      <Routes>
        
        
        
        <Route element={<ProtectedRoute loginStatusParent={loginStatus} />}>
          <Route path="/profile" element={<AppProfile userObj={userObj}/>} />
          <Route path="/product" element={<AppProducts />} />
        </Route> 
        
        <Route path="/login" element={<AppLogin setToken={setToken} 
          parentSetUsername={setUsername}
          parentSetPassword={setPassword}
          parentSetUserFirstName={setUserFirstName}
          parentSetUserLastName={setUserLastName}
          parentSetUserEmail={setUserEmail}
          parentSetUserObj={setUserObj}
          />} /> 

        

      </Routes>

      
    </Content>
    <Footer>
      <AppFooter />
    </Footer>

  </Layout>
  );
}

export default App;