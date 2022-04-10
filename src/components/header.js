import React from "react";
import './styles/header.css'

const Header= () => {
    const successCallback = (position) =>{
        console.log(position);
    }
    const errorCallback=(error)=>{
        console.log(error);
    }
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
    return (
        <React.Fragment>
            <div className="Header">
            </div>
        </React.Fragment>
    )
}

export default Header;