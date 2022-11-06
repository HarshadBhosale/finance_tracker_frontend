import React, { useState } from "react";
import UserSigninStyles from "./user_signup_styles";
import CallAPI from "../../utils/call_api";

const UserSignUp = (props) => {
    const[loading, setLoading] = useState(false);

    const createUserProfile = async (api_json) => {
        setLoading(true)
        let user = await CallAPI({url:"http://127.0.0.1:8000/signup", method:"post", data:api_json})
        props.setUserId(user.data.id);
        window.sessionStorage.setItem("user_id", user.data.id)
        setLoading(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let api_json = {};
        let fields = ["name", "email", "country_code", "mobile_number", "password"];
        fields.forEach((element) => {
            if (['country_code', 'mobile_number'].includes(element)){
                api_json[element] = parseInt(event.target[element].value);
            } else{
                api_json[element] = event.target[element].value;
            }
        });
        await createUserProfile(api_json);
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