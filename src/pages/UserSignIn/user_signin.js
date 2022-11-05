import React, { useState } from "react";
import UserLoginStyles from "./user_signin_styles";
import CallAPI from "../../utils/call_api";

const UserSignIn = (props) => {
    const[loading, setLoading] = useState(false);

    const logInUserProfile = async (api_json) => {
        setLoading(true)
        let user = await CallAPI({url:"http://127.0.0.1:8000/users/login", method:"post", data:api_json})
        props.setUserId(user.data.id);
        sessionStorage.setItem("user_id", user.data.id);
        setLoading(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let api_json = {};
        let fields = ["email", "password"];
        fields.forEach((element) => {
            api_json[element] = event.target[element].value;
        });
        await logInUserProfile(api_json);
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