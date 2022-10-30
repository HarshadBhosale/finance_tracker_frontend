import React, { useState } from "react";
import UserSigninStyles from "./user_signin_styles";
import CallAPI from "../../utils/call_api";

const UserSignin = (props) => {
    const[loading, setLoading] = useState(false);

    const createUserProfile = async (api_json) => {
        setLoading(true)
        let user = await CallAPI({url:"http://127.0.0.1:8000/users/create", method:"post", data:api_json})
        props.setUserId(user.data.id);
        window.sessionStorage.setItem("user_id", user.data.id)
        setLoading(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let api_json = {};
        let fields = ["name", "email", "country_code", "mobile_number", "password"];
        fields.forEach((element) => {
            api_json[element] = event.target[element].value;
        });
        await createUserProfile(api_json);
        props.setIsSigned(true)
      };
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div style={UserSigninStyles.Input}>
                    <input type="name" name="name" placeholder="Name..." required />
                </div>
                <div style={UserSigninStyles.Input}>
                    <input type="email" name="email" placeholder="Email..." required />
                </div>
                <div style={UserSigninStyles.Input}>
                    <input type="number" name="country_code" placeholder="Country Code..." defaultValue="91" />
                </div>
                <div style={UserSigninStyles.Input}>
                    <input type="number" name="mobile_number" placeholder="Mobile Number..." />
                </div>
                <div style={UserSigninStyles.Input}>
                    <input type="password" name="password" placeholder="Password..." required />
                </div>
                <div style={UserSigninStyles.Button}>
                    <input type="submit" />
                </div>
            </form>
            <div style={UserSigninStyles.Button}>
                <button type="submit" onClick={()=>{props.setIfSignin(false)}}> Log In </button>
            </div>
        </>
    );
}

export default UserSignin;