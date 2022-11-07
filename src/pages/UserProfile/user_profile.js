import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetProfile from "./useGetProfile";
import UserProfileStyles from "./user_profile_styles";

const UserProfile = (props) => {
    const[profile, setProfile] = useState({});
    const[loading, setLoading] = useState(true);

    const logoutUserProfile = () => {
        sessionStorage.removeItem("user_id")
        props.setIsSigned(false)
    }

    const GetUserProfile = async () => {
        setLoading(true)
        useGetProfile({
            userId: props.userId,
            setProfile: setProfile
        });
        setLoading(false)
    }

    useEffect(()=>{
        GetUserProfile()
    }, [UserProfile])

    return(
        <div style={UserProfileStyles.ProfileCard}>
            <div>{profile.name}</div>
            <div>{profile.email}</div>
            <div>+{profile.country_code}-{profile.mobile_number}</div>
            <Link to="/" onClick={logoutUserProfile}> Log Out </Link>
        </div>
    );
}

export default UserProfile;