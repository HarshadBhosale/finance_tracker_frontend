import React, { useState } from "react";
import UserRegistrationStyles from "./user_registration_styles";
import SignIn from "../SignIn/signin";
import SignUp from "../SignUp/signup";

const UserRegistration = (props) => {
    const[ifSignin, setIfSignin] = useState(true);
    
    return(
        <>
            {
                ifSignin ?
                <SignUp setIsSigned={props.setIsSigned} setUserId={props.setUserId} setIfSignin={setIfSignin}/> :
                <SignIn setIsSigned={props.setIsSigned} setUserId={props.setUserId} />
            }
        </>
    );
}

export default UserRegistration;