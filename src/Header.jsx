import React from "react";
import "./index.css";
import logo from "./image/logo.png"

const Header=()=>{
    return(
        <>
        <div className="header">
            <img src={logo} alt=""/>
            <h1>keepIt</h1>
        </div>
        </>
    )
}
export default Header;