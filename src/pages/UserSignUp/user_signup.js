import React, { useState } from "react";
import UserSigninStyles from "./user_signup_styles";
import useSignUp from "./useSignUp";

const UserSignUp = (props) => {
    const[loading, setLoading] = useState(false);

    const SignUp = async (data) => {
        setLoading(true)
        useSignUp({
            data: data,
            setUserId: props.setUserId,
        });
        setLoading(false)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let data = {};
        let fields = ["name", "email", "country_code", "mobile_number", "password"];
        fields.forEach((element) => {
            if (['country_code', 'mobile_number'].includes(element)){
                data[element] = parseInt(event.target[element].value);
            } else{
                data[element] = event.target[element].value;
            }
        });

        await SignUp(data);
        props.setIsSigned(true)
      };
    
    return(
        <form style={UserSigninStyles.SignupForm} onSubmit={handleSubmit}>
            <input style={UserSigninStyles.Input} type="name" name="name" placeholder="Name..." required />
            <input style={UserSigninStyles.Input} type="email" name="email" placeholder="Email..." required />
            <input style={UserSigninStyles.Input} type="number" name="country_code" placeholder="Country Code..." defaultValue="91" />
            <input style={UserSigninStyles.Input} type="number" name="mobile_number" placeholder="Mobile Number..." />
            <input style={UserSigninStyles.Input} type="password" name="password" placeholder="Password..." required />
            <button style={UserSigninStyles.Button} type="submit"> Sign Up </button>
            <div >
                <button style={UserSigninStyles.Button} type="submit" onClick={()=>{props.setIfSignin(false)}}> Go To Sign In </button>
            </div>
        </form>
    );
}

export default UserSignUp;