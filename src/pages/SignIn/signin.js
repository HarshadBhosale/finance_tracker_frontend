import React, { useState } from "react";
import SignInStyles from "./signin_styles";
import useSignIn from "./useSignIn";

const SignIn = (props) => {
    const[loading, setLoading] = useState(false);

    const GetSignIn = async (data) => {
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
        
        await GetSignIn(data);
        props.setIsSigned(true)
      };
    
    return(
        <form style={SignInStyles.SignInForm} onSubmit={handleSubmit}>
            <input style={SignInStyles.Input} type="email" name="email" placeholder="Email..." required />
            <input style={SignInStyles.Input} type="password" name="password" placeholder="Password..." required />
            <button style={SignInStyles.Button} type="submit"> Sign In </button>
        </form>
    )
}

export default SignIn;