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

  // token===null? console.log("out"): console.log("in");
 

  useEffect(() => {
    if(token){
      setLoginStatus(true);
      localStorage.setItem('userLogin', true);
    }else{
      setLoginStatus(false);
      localStorage.setItem('userLogin', false);
    }
  })

  


  console.log("loginStatus");
  console.log(loginStatus);

  console.log("token");
  console.log(token);

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

      

      <Routes>

        {/* <Route index element={
          <ProtectedRoute loginStatusParent={loginStatus} loginPage={<AppLogin token={token} setToken={setToken} 
          parentSetUsername={setUsername}
          parentSetPassword={setPassword}
          parentSetUserFirstName={setUserFirstName}
          parentSetUserLastName={setUserLastName}
          parentSetUserEmail={setUserEmail}
          />}>
            <AppProducts />
          </ProtectedRoute>
        } /> */}

        
       {/* =========================== */}
        
        <Route element={<ProtectedRoute loginStatusParent={loginStatus} />}>
        <Route path="/" element={<AppProfile />} />
          <Route path="/product" element={<AppProducts />} />
          
        </Route> 
        
        <Route path="/login" element={<AppLogin setToken={setToken} 
          parentSetUsername={setUsername}
          parentSetPassword={setPassword}
          parentSetUserFirstName={setUserFirstName}
          parentSetUserLastName={setUserLastName}
          parentSetUserEmail={setUserEmail}
          />} /> 

        {/* ===================== */}
     
      {/* <Route path="/product" element={
      <ProtectedRoute loginStatusParent={loginStatus} loginPage={<AppLogin token={token} setToken={setToken} 
      parentSetUsername={setUsername}
      parentSetPassword={setPassword}
      parentSetUserFirstName={setUserFirstName}
      parentSetUserLastName={setUserLastName}
      parentSetUserEmail={setUserEmail}
      />}>
        <AppProducts />
      </ProtectedRoute>
      } />

      <Route path="/profile" element={
      <ProtectedRoute loginStatus={loginStatus}>
        <AppProfile />
      </ProtectedRoute>
      } /> */}
        

      </Routes>

      {/* {token? <AppProducts />: 
      <AppLogin token={token} setToken={setToken} 
      parentSetUsername={setUsername}
      parentSetPassword={setPassword}
      parentSetUserFirstName={setUserFirstName}
      parentSetUserLastName={setUserLastName}
      parentSetUserEmail={setUserEmail}
      />} */}
      
    </Content>
    <Footer>
      <AppFooter />
    </Footer>

  </Layout>
  );
}

export default App;