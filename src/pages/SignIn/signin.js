import React, { useState } from "react";
import SignInStyles from "./signin_styles";
import useSignIn from "./useSignIn";

const SignIn = ({
    setUserId,
    setIsSigned,
    setError,
}) => {
    const[loading, setLoading] = useState(false);

    const GetSignIn = async (data) => {
        setLoading(true)
        let message = await useSignIn({
            data : data,
            setUserId : setUserId,
        });
        setLoading(false)
        return message
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let data = {};
        let fields = ["email", "password"];
        fields.forEach((element) => {
            data[element] = event.target[element].value;
        });
        
        let message = await GetSignIn(data);
        if (!message){
            setIsSigned(true)
        }
        else{
            setError(message);
        }
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