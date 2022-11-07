import React, { useState } from "react";
import UserLoginStyles from "./user_signin_styles";
import useSignIn from "./useSignIn";

const UserSignIn = (props) => {
    const[loading, setLoading] = useState(false);

    const SignIn = async (data) => {
        setLoading(true)
        useSignIn({
            data : data,
            setUserId : props.setUserId,
        });
        setLoading(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let data = {};
        let fields = ["email", "password"];
        fields.forEach((element) => {
            data[element] = event.target[element].value;
        });
        
        await SignIn(data);
        props.setIsSigned(true)
      };
    
    return(
        <form style={UserLoginStyles.SignInForm} onSubmit={handleSubmit}>
            <input style={UserLoginStyles.Input} type="email" name="email" placeholder="Email..." required />
            <input style={UserLoginStyles.Input} type="password" name="password" placeholder="Password..." required />
            <button style={UserLoginStyles.Button} type="submit"> Sign In </button>
        </form>
    )
}

export default UserSignIn;