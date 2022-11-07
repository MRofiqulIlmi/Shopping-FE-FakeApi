import React, {useState, useEffect} from "react";
import axios from "axios";


export function GetUserDetail(){

    const [userUsername, setUserUsername] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userAddressStreet, setUserAddressStreet] = useState("");
    const [userAddressZipCode, setUserAddressZipCode] = useState("");
    const [userAddressNumber, setUserAddressNumber] = useState(null);
    const [userAddressCity, setUserAddressCity] = useState("");
    const [userAddressLat, setUserAddressLat] = useState("");
    const [userAddressLong, setUserAddressLong] = useState("");
    


    const username = localStorage.getItem("username");
    

    



    axios({
        method:"GET",
        url: "https://fakestoreapi.com/users",

    }).then(res => {

        const userData = res.data.filter((val) => {return val.username === username})[0];
        // console.log("userData getuserdetail");
        console.log(userData);
        setUserUsername(userData.username);
        setUserPassword(userData.password);
        setUserFirstName(userData.name.firstname);
        setUserLastName(userData.name.lastname);
        setUserEmail(userData.email);
        setUserPhone(userData.phone);
        setUserAddressStreet(userData.address.street);
        setUserAddressZipCode(userData.address.zipcode);
        setUserAddressNumber(userData.address.number);
        setUserAddressCity(userData.address.city);
        setUserAddressLat(userData.address.geolocation.lat);
        setUserAddressLong(userData.address.geolocation.long);



        

        // parentUserProfileCallback(username, password, userFirstName, userLastName, userEmail);
        
        

        
    })

    return {username: userUsername,
        password: userPassword, 
        firstname: userFirstName, 
        lastname: userLastName,
    email: userEmail,
    phone: userPhone,
    addressStreet: userAddressStreet,
    addressZipcode: userAddressZipCode,
    addressNumber: userAddressNumber,
    addressCity: userAddressCity,
    addressLat: userAddressLat,
    addressLong: userAddressLong

    };
}

