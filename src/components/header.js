import React from "react";
import { Button, Avatar, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';



function AppHeader({loginStatus,setToken,userFirstName, userLastName, setUserFirstName, setUserLastName}){
    
    const logOutHandler = () => {
        setToken("");
        setUserFirstName("");
        setUserLastName("");
        localStorage.clear();
    }
    
    const statusList = (
        <div>
            
            <p><a href="#">Profile</a></p>
            <p><a href="#">Change Password</a></p>
            <Button onClick={()=>logOutHandler()}>LogOut</Button>
            
        </div>
    );
    
    const userTitle = <p>{userFirstName + " " + userLastName}</p>



    console.log("loginStatus : " + loginStatus);
    
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <a href="#">YOLO</a>
                </div>


                    
                    
                    {loginStatus?
                    <Popover placement="bottom" title={userTitle} content={statusList} trigger="click">
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Popover>
                    :<div></div>}

                        
                   
                
            </div>
        </div>
    )
}

export default AppHeader;