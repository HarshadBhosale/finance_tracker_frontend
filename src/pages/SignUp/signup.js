import React, { useState } from "react";
import SignUpStyles from "./signup_styles";
import useSignUp from "./useSignUp";

const SignUp = (props) => {
    const[loading, setLoading] = useState(false);

    const GetSignUp = async (data) => {
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

        await GetSignUp(data);
        props.setIsSigned(true)
      };
    
    return(
        <form style={SignUpStyles.SignupForm} onSubmit={handleSubmit}>
            <input style={SignUpStyles.Input} type="name" name="name" placeholder="Name..." required />
            <input style={SignUpStyles.Input} type="email" name="email" placeholder="Email..." required />
            <input style={SignUpStyles.Input} type="number" name="country_code" placeholder="Country Code..." defaultValue="91" />
            <input style={SignUpStyles.Input} type="number" name="mobile_number" placeholder="Mobile Number..." />
            <input style={SignUpStyles.Input} type="password" name="password" placeholder="Password..." required />
            <button style={SignUpStyles.Button} type="submit"> Sign Up </button>
            <div >
                <button style={SignUpStyles.Button} type="submit" onClick={()=>{props.setIfSignin(false)}}> Go To Sign In </button>
            </div>
        </form>
    );
}

export default SignUp;