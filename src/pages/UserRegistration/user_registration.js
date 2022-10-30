import React, { useState } from "react";
import UserRegistrationStyles from "./user_registration_styles";
import UserLogin from "../UserLogin/user_login";
import UserSignin from "../UserSigin/user_signin";

const UserRegistration = (props) => {
    const[ifSignin, setIfSignin] = useState(true);
    
    return(
        <>
            {
                ifSignin ?
                <UserSignin setIsSigned={props.setIsSigned} setUserId={props.setUserId} setIfSignin={setIfSignin}/> :
                <UserLogin setIsSigned={props.setIsSigned} setUserId={props.setUserId} />
            }
        </>
    );
}

export default UserRegistration;