import React from "react";
import { Button } from 'antd';

function AppHeader({loginStatus,setToken}){
    
    const logOutHandler = () => {
        setToken("");
        localStorage.clear();
    }
    
    console.log("loginStatus : " + loginStatus);
    
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <a href="#">YOLO</a>
                </div>
                
                    {loginStatus? <Button onClick={()=>logOutHandler()}>LogOut</Button>:<div></div>}
                        
                   
                
            </div>
        </div>
    )
}

export default AppHeader;