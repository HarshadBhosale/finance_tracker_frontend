import React from "react";
import {Link, BrowserRouter, Routes, Route} from "react-router-dom";
import NavView from "./nav_view";
import UserRegistration from "../pages/user_registration";


const NavOption = (props) => {
    return(
        <>
        <BrowserRouter>
            <div>
                <Link to = "/stats"> <div> stats </div> </Link>
                <Link to = "/profile"> <div> profile </div> </Link>
                <Link to = "/transactions"> <div> transactions </div> </Link>
                <Link to = "/graphics"> <div> graphics </div> </Link>
            </div>
            <Routes>
                <Route path="/stats" element={<SetViewOption setOption={props.setOption} val="stats"/>} />
                <Route path="/profile" element={<SetViewOption setOption={props.setOption} val="profile"/>} />
                <Route path="/transactions" element={<SetViewOption setOption={props.setOption} val="transactions"/>} />
                <Route path="/graphics" element={<SetViewOption setOption={props.setOption} val="graphics"/>} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

const SetViewOption = (props) => {
    props.setOption(props.val)
}

export default NavOption;