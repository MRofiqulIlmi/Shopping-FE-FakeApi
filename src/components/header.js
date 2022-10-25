import React from "react";
import { Button } from 'antd';

function AppHeader({token,setToken}){
    
    const logOutHandler = () => {
        setToken("");
        localStorage.clear();
    }
    
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <a href="#">YOLO</a>
                </div>
                <Button onClick={()=>logOutHandler()}>LogOut</Button>
                        {/* {token? <Button onClick={()=>logOutHandler()}>LogOut</Button>:<div></div>} */}
                        
                   
                
            </div>
        </div>
    )
}

export default AppHeader;