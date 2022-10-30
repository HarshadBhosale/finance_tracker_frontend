import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallAPI from "../../utils/call_api"

const UserProfile = (props) => {
    const[d, setd] = useState({});
    const[loading, setLoading] = useState(true);

    const logoutUserProfile = () => {
        sessionStorage.removeItem("user_id")
        props.setIsSigned(false)
    }
    const getUserProfile = async () => {
        setLoading(true)
        let user_profile = await CallAPI({url:"http://127.0.0.1:8000/users/get", method:"post", data:{"user_id": props.userId}})
        setd(user_profile.data)
        setLoading(false)
    }

    useEffect(()=>{
        getUserProfile()
    }, [UserProfile])

    return(
        <>
            <div>
                <div>{d.name}</div>
                <div>{d.email}</div>
                <div>+{d.country_code}-{d.mobile_number}</div>
                <Link to="/" onClick={logoutUserProfile}> Log Out </Link>
            </div>
        </>
    );
}

export default UserProfile;