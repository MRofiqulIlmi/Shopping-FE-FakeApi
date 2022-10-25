import React from "react";
import {Menu, Button } from 'antd';

function AppHeader(){
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <a href="#">YOLO</a>
                </div>
                
                        <Button>LogOut</Button>
                   
                
            </div>
        </div>
    )
}

export default AppHeader;