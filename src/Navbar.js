import React from "react"
import Logo1 from "./Logo1.jpg"
import style from "./style.css"

export default function Navbar(){
    return(
        <>
            <nav>
                <img src ={Logo1}alt="travel-logo" className="nav-logo"></img>
                <h1 className="header">Travel palaces</h1>
            </nav>
        </>
    )
}