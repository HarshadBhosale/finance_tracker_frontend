import React, { useState } from "react";
import NavGroup from "./common/nav_group";
// import Sty from "./styles";
import UserRegistration from "./pages/user_registration";
import Header from "./common/header";

const FinanceTrackerApp = () => {
    const[isSigned, setIsSigned] = useState(true); // change this
    
    return(
        <>
            {
                isSigned ?
                (<><Header /><NavGroup /></>) :
                <UserRegistration />
            }
        </>
    );
}

export default FinanceTrackerApp;