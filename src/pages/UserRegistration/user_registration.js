import React, { useState } from "react";
import UserRegistrationStyles from "./user_registration_styles";
import SignIn from "../SignIn/signin";
import SignUp from "../SignUp/signup";

const UserRegistration = ({
    setIsSigned,
    setUserId,
    setError,
}) => {
    const[ifSignin, setIfSignin] = useState(true);
    
    return(
        <>
            {
                ifSignin ?
                <SignUp
                    setIsSigned={setIsSigned}
                    setUserId={setUserId}
                    setIfSignin={setIfSignin}
                    setError={setError}
                /> :
                <SignIn
                    setIsSigned={setIsSigned}
                    setUserId={setUserId}
                    setError={setError}
                />
            }
        </>
    );
}

export default UserRegistration;