import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserRegistration from "../pages/user_registration";


const NavView = (props) => {
    return(
        <>
            IN {props.option}
        </>
    );
}

export default NavView;