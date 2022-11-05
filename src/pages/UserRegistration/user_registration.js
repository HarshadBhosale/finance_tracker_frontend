import React, { useState } from "react";
import UserRegistrationStyles from "./user_registration_styles";
import UserSignIn from "../UserSignIn/user_signin";
import UserSignUp from "../UserSignUp/user_signup";

const UserRegistration = (props) => {
    const[ifSignin, setIfSignin] = useState(true);
    
    return(
        <>
            {
                ifSignin ?
                <UserSignUp setIsSigned={props.setIsSigned} setUserId={props.setUserId} setIfSignin={setIfSignin}/> :
                <UserSignIn setIsSigned={props.setIsSigned} setUserId={props.setUserId} />
            }
        </>
    );
}

export default UserRegistration;